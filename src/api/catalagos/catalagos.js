const restful = require('node-restful')
const mongoose = restful.mongoose

const catalagosSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Date: { type: String, require: true },    
    tipo : { type: String, required: false, default: '' }
})

module.exports = restful.model('Catalagos', catalagosSchema)