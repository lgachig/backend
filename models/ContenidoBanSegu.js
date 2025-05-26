const mongoose = require('mongoose');

const SubapartadoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  items: { type: [String], required: true }
});

const ContenidoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  subapartados: { type: [SubapartadoSchema], required: true }
});

module.exports =  mongoose.model('Contenido', ContenidoSchema);