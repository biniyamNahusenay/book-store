const { stack } = require("../routes/userRoutes")

const errorHandler = (err, req, res,next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
        message:err.message,
        stack:process.env.NODE_ENV ==="development" ? err.stack : null   // stack means the url of like c://users/..
    })
}

module.exports = errorHandler;