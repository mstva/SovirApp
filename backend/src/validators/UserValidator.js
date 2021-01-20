import ExpressValidator from "express-validator";
const { validationResult, check } = ExpressValidator

export const RegisterValidateRequest = [
    check('name').notEmpty().withMessage('username is required'),
    check('email').isEmail().withMessage('valid email is required'),
    check('password').isLength({ min: 6 }).withMessage('password must be at least 6 character long'),
]

export const LoginValidateRequest = [
    check('email').isEmail().withMessage('please enter your email to login'),
    check('password').isLength({ min: 6 }).withMessage('please enter your password to login'),
]

export const isRequestValidated = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.array().length > 0) return res.status(400).json({ errors: errors.array()[0].msg })
    next()
}