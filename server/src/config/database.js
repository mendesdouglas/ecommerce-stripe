const mongoose = require('mongoose');
require('dotenv').config()

//
//console.log(process.env.DATABASE_CREDENTIALS)
let cloud = true
let data = ''
let url=''
//Is possible connect in different database, local or cloud, just set up cloud true or false
if(cloud){
    url = process.env.DATABASE_CREDENTIALS
    data="Database Cloud Connected"
}else{
    url = process.env.DATABASE_CREDENTIALS_LOCAL
    data="Database local Connected"
}

mongoose.connect(url, {useNewUrlParser: true}).then(() => console.log(data));

module.exports = mongoose;