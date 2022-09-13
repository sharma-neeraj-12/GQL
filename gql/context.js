const { verifiedUser:getUser } = require('../utils/Auth')

// context --> veified user
const context = ({ req }) => {
    const token =  req.get('Authorization') || ''
    return { user: getUser(token.replace('Bearer', ''))}
  }

  module.exports =context 
