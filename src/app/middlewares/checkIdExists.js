const Project = require('../models/Project')

module.exports = function checkIdExists(req, res, next) {

  const { id } = req.params

  const project = Project.find(p => p.id == id)

  if (!project) {
    return res.status(400).json({ error: 'Project not found' })
  }

  return next()
}