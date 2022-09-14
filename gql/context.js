const { verifiedUser:getUser } = require('../utils/Auth')

// context --> veified user
const context =  ({req}) => {
  
    const token =  req.headers.authorization;
    return { user: getUser(token)}
  }


  module.exports = context 
