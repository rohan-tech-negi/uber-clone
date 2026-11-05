const userModel = require('../models/user.models')


module.exports.createUser = async({
    firstname, lastname, email, password
}) => {
    if(!firstname || !email || !password){
        throw new Error('All firelds are required')
    } 
    const user = userModel.create({
        fullname: {
            firstname, 
            lastname
        },
        email,
        password
    })
}