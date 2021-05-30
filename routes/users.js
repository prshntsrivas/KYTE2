const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersController');
router.get('/profile',userController.profile);

module.exports = router;