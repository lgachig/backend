const mongoose = require('mongoose');

const formatSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  link: {
    type: String,  // Un array para soportar varios enlaces
    required: true
  }
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  topics: {
    type: [String],  // Un array de temas
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  formats: [formatSchema]  // Array de objetos relacionados a los formatos
});

module.exports =  mongoose.model('Course', courseSchema);