const contenidoBanSegu = require('../models/ContenidoBanSegu');
const cursosEduFin = require('../models/CursosEduFin');
const institucionComBanco = require('../models/InstitucionComBan');
const pestaniasComBanco = require('../models/PestaniasComBan');

exports.getBanseguContenido = async (req, res, next ) => {
  try {
    const contenido = await contenidoBanSegu.find();
    res.status(200).json({
      success: true,
      data: contenido
    });
  }
  catch (err) {
    res.status(400).json({
      success: false
    });
  }

  exports.addBanseguContenido = async (req, res, next ) => {
    try {
      const contenido = await contenidoBanSegu.create(req.body);
      res.status(200).json({
        success: true,
        data: contenido
      });
    }
    catch (err) {
      res.status(400).json({
        success: false
      });
    }
  }
}

exports.addBanseguContenido = async (req, res, next ) => {
  try {
    const contenido = await contenidoBanSegu.create(req.body);
    res.status(200).json({
      success: true,
      data: contenido
    });
  }
  catch (err) {
    res.status(400).json({
      success: false
    });
  }
}

exports.addCombancoInstitucion = async (req, res, next ) => {
  try {
    const institucion = await institucionComBanco.create(req.body);
    res.status(200).json({
      success: true,
      data: institucion
    });
  }
  catch (err) {
    res.status(400).json({
      success: false,
      data: err
    });
  }
};

exports.getCombancoPestaniasInstituciones = async (req, res, next ) => {
  try {
    const pestanias = await pestaniasComBanco.find();
    const instituciones = await institucionComBanco.find();
    res.status(200).json({
      success: true,
      dataPes: pestanias,
      dataInst: instituciones
    });
  }
  catch (err) {
    res.status(400).json({
      success: false
    });
  }
}

exports.addCombancoPestanias = async (req, res, next ) => {
  try {
    const pestanias = await pestaniasComBanco.create(req.body);
    res.status(200).json({
      success: true,
      data: pestanias
    });
  }
  catch (err) {
    res.status(400).json({
      success: false
    });
  }
};


exports.getEduFinCourses = async (req, res, next ) => {
  try {
    const cursos = await cursosEduFin.find();
    res.status(200).json({
      success: true,
      data: cursos
    });
  }
  catch (err) {
    res.status(400).json({
      success: false
    });
  }
}

exports.addEduFinCourses = async (req, res, next) => {
  try {
    const cursos = await cursosEduFin.create(req.body);
    res.status(200).json({
      success: true,
      data: cursos
    });
  }
  catch (err) {
    res.status(400).json({
      success: false
    });
  }
}

