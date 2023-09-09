const express = require('express');
const { loginController, registerController } = require('../controllers/userController');

/* 
    Router Object
*/
const router = express.Router();

/* 
    routers
*/

/* 
    POST || USER LOGIN
*/
router.post('/login', loginController);

/* 
    POST || USER REGISTER
*/
router.post('/register', registerController);

module.exports = router;