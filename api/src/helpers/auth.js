const bcrypt = require('bcrypt')


    const hashPassword = (password) => {
        return new Promise((resolve, reject) => {
            console.log('to no hashPass')
            bcrypt.genSalt(12, (err, salt) => {
                if(err) {
                    reject(err)
                }
                const pass = bcrypt.hash(password, salt, (err, hash) => {
                    if(err){
                        reject(err)
                    }
                    resolve(hash)
                })
                console.log('teste',pass)
            })
        })
    }


    // async comparePassword(password, hashed){
    //     return bcrypt.compare(password, hashed) //verdadeiro
    // }  

    //module.exports = mongoose
module.exports = hashPassword    
  
   
