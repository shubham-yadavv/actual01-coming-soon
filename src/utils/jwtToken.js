const {cookie_expire} = require('../config');

const  sendToken = (user, statusCode, res) => {

    const token = user.getJWTToken();

    const options = {
        expires: new Date(
            Date.now() + cookie_expire * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user,
        token
    })
}

module.exports = sendToken;