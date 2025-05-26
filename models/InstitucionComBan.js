const mongoose = require('mongoose');

const InstitucionSchema = new mongoose.Schema({
  institucion: { type: String, required: true },
  tipo: { type: String, required: true },
  tarifa: { type: String, required: true },
  beneficios: { type: [String], required: true },
  requisitos: { type: [String], required: true },
  enlace: { type: String, required: true }
});

module.exports =  mongoose.model('Institucion', InstitucionSchema);