const Catalagos = require('./catalagos')

Catalagos.methods(['get', 'post', 'put', 'delete'])
/**
 * Trazer o elemento atualizado após o post
 * validar os dados durante o post
 */
Catalagos.updateOptions({ new: true, runValidators: true })

module.exports = Catalagos