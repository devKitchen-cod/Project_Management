const express = require('express')
const router = express.Router()

const loginController = require('../controller/auth-controller')
const userController = require('../controller/auth-controller')


router.post('/checktoken', userController.VerifyToken)
router.post('/user', userController.createAccount)
router.post('/login', loginController.loginAccount)



//test
// router.get('/test-route', test_controller.findUsers)
// router.post('/test-sms', test_send_sms.Verification)

module.exports = router
