const mongoose = require('mongoose');

let esquemaUsuario = new mongoose.Schema({
    nombres : String,
    apellidos : String,
    cargo : String,
    email : String,
    contrasenia : String,
    rol : String,
    bloqueado : Boolean
});

module.exports = mongoose.model('usuario',esquemaUsuario,'Usuarios');