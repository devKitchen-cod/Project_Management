const express = require('express')
const router = express.Router()

const loginController = require('../controller/login-controller')
const userController = require('../controller/auth-controller')
const trackcontroller = require('../controller/track-controller')
const projController = require('../controller/projects-controller')
const taskConstroller = require('../controller/task-controller')

router.post('/task-create', taskConstroller.createTask)
router.post('/task-read', taskConstroller.readTask)
router.post('/user', userController.createUser)
router.post('/project', trackcontroller.createProject)
router.post('/tracker', trackcontroller.trackContrl)
router.post('/login', loginController.loginUser)
router.post('/allproj', projController.getProject)
router.post('/allusers', projController.getUsers)

module.exports = router
