const jwt = require('jsonwebtoken')
const tokenize = async(user)=>{
const token = await jwt.sign(
    { id: user.id, email: user.email},
    process.env.JWT_SECRET,
    { expiresIn: '1y' }
  )
console.log(token)
  return token;
}

const verifiedUser = (token) => {
  try {
    if (token) {
      const decoded =  jwt.verify(token.slice(7), process.env.JWT_SECRET);
      return decoded;
    }
    return "token verification failed"
  }catch (error) {
    return "exception in verification"
  }
}

module.exports = {tokenize,verifiedUser}