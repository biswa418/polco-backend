const express = require('express')
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', function (req, res) {
    return res.json({ message: "Hello" })
});

router.post('/signin', userController.signin);
router.post('/signup', userController.signup);

module.exports = router;