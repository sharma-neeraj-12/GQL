const bcrypt = require('bcryptjs')
const models = require('../models/userModel')
const {tokenize} = require('../utils/Auth')
require('dotenv').config()


const resolvers = {
    Query: {
        async user(root, { id }, { user }) {
            try {
                if (!user) throw new Error('You are not authenticated!')
                return models.User.findOne(id)
            } catch (error) {
                throw new Error(error.message)
            }
        },
        async allUsers(root, args, { user }) {
            try {
                if (!user) throw new Error('You are not authenticated!')
                return models.User.find()
            } catch (error) {
                throw new Error(error.message)
            }
        }
    },
    Mutation: {
        async registerUser(root, { username, email, password }) {
            try {
                const user = await models.User({
                    username,
                    email,
                    password: await bcrypt.hash(password, 10)
                })

                await user.save()
                // tokenize
                const token = tokenize(user);
                return {
                    token, id: user.id, username: user.username, email: user.email, message: "Authentication succesfull"
                }

            } catch (error) {
                throw new Error(error.message)
            }
        },
        async login(_, { email, password }) {
            try {
                const user = await models.User.findOne({ email })
                if (!user) {
                    throw new Error('No user with that email')
                }
                const isValid = await bcrypt.compare(password, user.password)
                if (!isValid) {
                    throw new Error('Incorrect password')
                }
                // return jwt
                const token = await tokenize(user);

                return {
                    token, user
                }
            } catch (error) {
                throw new Error(error.message)
            }
        }
    },

}
module.exports = resolvers