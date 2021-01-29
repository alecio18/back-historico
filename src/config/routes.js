const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes    
    const catalagosService = require('../api/catalagos/catalagosService')    
   
    catalagosService.register(router, '/catalagos')
}