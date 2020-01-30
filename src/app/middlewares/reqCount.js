module.exports = function reqCount(req, res, next) {
  console.count('Requisições')
  return next()
}