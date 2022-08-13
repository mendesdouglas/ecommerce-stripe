const bcrypt = require("bcrypt");

class Auth{
    async hashPassword(password){
        return new Promise((resolve, reject) => {
            let newPassword = password.toString()
            console.log('senha que será gerada',password)
            const salte =  bcrypt.genSalt(12)
            const pass =   bcrypt.hash(newPassword, 10)
            console.log('teste', pass)
        })
    }
}
    
module.exports = new Auth()    
  
   
