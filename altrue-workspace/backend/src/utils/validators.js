const Joi = require('joi');

const userValidationSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
});

const tenantValidationSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    contactEmail: Joi.string().email().required(),
    logo: Joi.string().uri().optional(),
    theme: Joi.object({
        primaryColor: Joi.string().hex().length(7).optional(),
        secondaryColor: Joi.string().hex().length(7).optional(),
    }).optional()
});

const validateUser = (data) => {
    return userValidationSchema.validate(data);
};

const validateTenant = (data) => {
    return tenantValidationSchema.validate(data);
};

module.exports = {
    validateUser,
    validateTenant
};