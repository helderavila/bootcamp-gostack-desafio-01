const { Router } = require('express')

const ProjectController = require('../src/app/controllers/ProjectController')

const routes = new Router()

routes.get('/projects', ProjectController.index)
routes.post('/projects', ProjectController.store)
routes.put('/projects/:id', ProjectController.update)
routes.delete('/projects/:id', ProjectController.delete)
routes.post('/projects/:id/tasks', ProjectController.storeTask)

module.exports = routes;

