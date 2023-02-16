const {body} = require('express-validator')


exports.Validation=[
    body('email', 'please type a valid Email').isEmail(),
    body('password','password should be at least 6 caracters').isLength({min:6})
]