const mongoose = require('mongoose');

const PestaniaSchema = new mongoose.Schema({
    categoria: { type: String, required: true },
    titulo: { type: String, required: true },
    descripcion: { type: String, required: false },
    lista: { type: [String], required: true }
  });

module.exports =  mongoose.model('Pestania', PestaniaSchema);
  