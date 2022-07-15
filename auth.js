const { request } = require('http');
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        const token = await req.headers.authorization.split(" ")[1];
        const decodedToken = await jwt.verify(
            token,
            "RANDOM-TOKEN"
        )
        const user = await decodedToken
        request.user = user
        next();
    } catch (err) {
        res.status(401).json({
            error: new Error("Invalid request!")
        })
    }
}