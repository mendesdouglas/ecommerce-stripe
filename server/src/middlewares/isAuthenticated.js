const {next, request, response} = require('express');
const {verify} = require('jsonwebtoken')

const authToken = request.headers.authorization

if(!authToken){
    return response.status(401).end()
}

const [, token] = authToken.split(" ")

try{
    const {sub} = verify(
        token,
        process.env.JWT_SECRET
    )
    request.user_id = sub
    return next()

}catch(err){
    return response.status(401).end()
}