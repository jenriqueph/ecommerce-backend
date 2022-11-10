const express = require('express');
const router = express.Router();
const controladorUsuario = require('../Controllers/controller_usuario');

router.post("/create",controladorUsuario);
router.get("/list",controladorUsuario);
router.get("/read/:_id",controladorUsuario);
router.post("/update/:_id",controladorUsuario);
router.delete("/delete/:_id",controladorUsuario);

module.exports = router;