// usuarios.js
const Usuario = require('../models/Usuario'); // Adjust the path if necessary
// Corrección de la función getUsersMail
exports.login = async (req, res) => {  
  try {
    const { mail, password } = req.body;
    if (!mail || !password) {
      return res.status(400).json({
        success: false,
        data: "Por favor, ingrese usuario y contraseña",
        token: null
      });
    }

    const user = await Usuario.findOne({ mail }).select('+password');
    if (!user) {
      return res.status(400).json({
        success: false,
        data: "Usuario no encontrado",
        token: null
      });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        data: "Contraseña incorrecta",
        token: null
      });
    }
    const token = user.crearJwt();
    res.status(200).json({
      success: true,
      data: user,
      token: token
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      token: null
    });
  }
}

exports.addUser = async (req, res) => {
  try {
    const { mail } = req.body;
    const userExists = await Usuario.findOne({ 
      mail 
    });
    if (userExists) {
      return res.status(400).json({
        success: false,
        data: "El usuario ya existe"
      });
    }
    const user = await Usuario.create(req.body);
    const token = user.crearJwt();
    res.status(201).json({
      success: true,
      data: user,
      token: token
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await Usuario.find();
    res.status(200).json({
      success: true,
      data: users
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
}