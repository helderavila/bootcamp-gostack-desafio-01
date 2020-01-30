const Project = require('../models/Project')

class ProjectController {
  index(req, res) {
      return res.json(Project)
  }

  store(req, res) {
    const { id, title } = req.body

    const project = {
      id,
      title,
      tasks: []
    }
  
    Project.push(project)
  
    return res.json(Project)
  }

  update(req, res) {
    const { id } = req.params
    const { title } = req.body
  
    const project = Project.find(p => p.id == id)

      project.id == id
      project.title = title  
  
    return res.json(Project)
  }

  delete(req, res) {
    const { id } = req.params

    const projectIndex = Project.findIndex(p => p.id == id)
  
    Project.splice(projectIndex, 1)
  
    res.json({message: 'Projeto deletado'})
  }

  storeTask(req, res) {
    const { id } = req.params
    const { title } = req.body
  
    const projectIndex = Project.find(p => p.id == id)
  
    projectIndex.tasks.push(title)
  
    res.json(Project)
  }

}

module.exports = new ProjectController()