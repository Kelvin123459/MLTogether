const Joi = require('@hapi/joi');

//TODO: Add
const registration = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(7).required().strict(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict()
});

const changePassword = Joi.object({
    oldpassword: Joi.string().min(7).required().strict(),
    newpassword: Joi.string().min(7).required().strict(),
    newpasswordconfirm: Joi.string().valid(Joi.ref('newpassword')).required().strict()
});

const login = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(7).required().strict()
});



module.exports = {
    registration,
    login,
    changePassword
};