const express = require('express');
const router = express.Router();

const rutaUsuarios = require('./router_usuario');
router.use("/usuarios",rutaUsuarios);

module.exports = router;