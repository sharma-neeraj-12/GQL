const jsonwebtoken = require('jsonwebtoken')
const tokenize = async(user)=>{
const token = await jsonwebtoken.sign(
    { id: user.id, email: user.email},
    process.env.JWT_SECRET,
    { expiresIn: '1y' }
  )

  return token;
}

const verifiedUser = (token) => {
  try {
    if (token) {
      return jwt.verify(token, JWT_SECRET)
    }
    return null
  } catch (error) {
    return null
  }
}

module.exports = {tokenize,verifiedUser}