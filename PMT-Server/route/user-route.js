const express = require('express')
const router = express.Router()

const loginController = require('../controller/auth-controller')
const userController = require('../controller/auth-controller')
const trackcontroller = require('../controller/project-controller')
const projController = require('../controller/projects-controller')
const taskConstroller = require('../controller/task-controller')
const deleteProject = require('../controller/project-controller')

const test_controller = require('../controller/test')

router.post('/delete-project', deleteProject.deleteProject)

router.post('/task-read', taskConstroller.readTask)
router.post('/task-planned', taskConstroller.readTaskPlanned)
router.post('/task-read-inprogress', taskConstroller.readTaskInProgress)
router.post('/task-read-done', taskConstroller.readTaskInDone)
router.post('/task-change-status', taskConstroller.changeStatusTask)
router.post('/task-delete-task', taskConstroller.deleteTasks)


router.post('/checktoken', userController.VerifyToken)
router.post('/task-create', taskConstroller.createTask)
router.post('/task-read', taskConstroller.readTask)
router.post('/user', userController.createUser)
router.post('/descriptionproject', trackcontroller.getDescriptionProject)
router.post('/project', trackcontroller.createProject)
router.post('/tracker', trackcontroller.trackContrl)
router.post('/login', loginController.loginUser)
router.post('/allproj', projController.getProject)
router.post('/allusers', projController.getUsers)
router.post('/allceo', projController.getAllCEO)
router.post('/alldevops', projController.getALLDevOps)
router.post('/alldevelopers', projController.getALLDevelopers)

//test
router.get('/test-route', test_controller.findUsers)

module.exports = router
