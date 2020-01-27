const express = require('express')
const server = express()

server.use(express.json())

let projects = [
  {
    id: "1",
    title: "Novo Projeto",
    tasks: ["Nova Tarefa"]
  },
  {
    id: "2",
    title: "Projeto ReactJS",
    tasks: ["Criar componentes"]
  }
]

// Middleware para verificar se o id existe
function checkIdExists(req, res, next) {

  const { id } = req.params

  const project = projects.find(p => p.id == id)

  if (!project) {
    return res.status(400).json({ error: 'Project not found' })
  }

  return next()
}

// Middleware para checar a quantidade de requisições

server.use((req, res, next) => {
  console.count('Requisições')
  return next()
})

// Rota de criação de um projeto
server.post('/projects', (req, res) => {
  const project = req.body

  console.log(project)

  projects.push(project)

  return res.json(projects)
})

// Rota que lista todos os projetos
server.get('/projects', (req, res) => {
  return res.json(projects)
})

// Rota que edita o projeto
server.put('/projects/:id', checkIdExists, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const project = projects.find(p => p.id == id)

  project.title = title

  return res.json(projects)

})

// Rota que deleta um projeto com o id
server.delete('/projects/:id', checkIdExists, (req, res) => {
  const { id } = req.params

  const projectIndex = projects.findIndex(p => p.id == id)

  projects.splice(projectIndex, 1)

  res.json({message: 'Projeto deletado'})
})

// Rota que adiciona novas tarefas a um projeto existente
server.post('/projects/:id/tasks', checkIdExists, (req, res) =>{
  const { id } = req.params
  const { title } = req.body

  const projectIndex = projects.find(p => p.id == id)

  projectIndex.tasks.push(title)

  res.json(projects)
})

server.listen(3001)