const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');
const LoginUserController = require('../controller/LoginUserController');

const SubscriptionController = require('../controller/subscriptions/SubscriptionController')





router.post('/register', UserController.create);
router.post('/login', LoginUserController.handle);

router.get('/prices', SubscriptionController.handle);




module.exports = router;