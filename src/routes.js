const { Router } = require('express')

const ProjectController = require('../src/app/controllers/ProjectController')

const checkIdExists = require('./app/middlewares/checkIdExists')


const routes = new Router()

routes.get('/projects', ProjectController.index)
routes.post('/projects', ProjectController.store)
routes.put('/projects/:id', checkIdExists, ProjectController.update)
routes.delete('/projects/:id', checkIdExists, ProjectController.delete)
routes.post('/projects/:id/tasks', checkIdExists, ProjectController.storeTask)


module.exports = routes;

