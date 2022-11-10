const mongoose = require('mongoose');

let esquemaUsuario = new mongoose.Schema({
    nombres : String,
    apellidos : String,
    cargo : String,
    email : String,
    contrasenia : String,
    bloqueado : Boolean,
    rol : String
});

module.exports = mongoose.model('usuario',esquemaUsuario,'Usuarios');