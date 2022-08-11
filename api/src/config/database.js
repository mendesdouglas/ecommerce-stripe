const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/stripe'
try{
    mongoose.connect(url, {useNewUrlParser: true})
    console.log('estoy here', mongoose.connect(url))
}catch (e){
    console.log(e)

}


module.exports = mongoose