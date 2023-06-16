const jwt = require('jsonwebtoken');

module.exports.validate = (req, res, next) => {
    try {
        const token = req.headers["access-token"];

        if (!token) {
            return res.status(400).json({ message: "Token is required for accessing." });
        }

        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                return res.status(400).json({ message: err });
            }

            req.body.userId = decoded._id; //verified
            next();
        });

    } catch (err) {
        return res.status(500).json({ err });
    }
}