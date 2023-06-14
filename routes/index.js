const express = require('express')
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', function (req, res) {
    return res.json({ message: "Hello" })
});

router.get('/signin', userController.signin);

module.exports = router;