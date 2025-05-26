const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UsuarioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lname: { type: String, required: true },
    age: { type: Number, required: true },
    mail: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

UsuarioSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, salt);
}
);

UsuarioSchema.methods.crearJwt = function() {
    return jwt.sign({ name: this.name }, process.env.SECRET, {
        expiresIn: 3600
    });
}

UsuarioSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('Usuarios', UsuarioSchema);