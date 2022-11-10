const express = require('express');
const router = express.Router();
const modeloUsuario = require('../Models/model_usuario');
const Enum = require('enum');
const {
    routeHelper,
    sleep,
    ecargos,
    eroles,
} = require('../Routers/route');

//Implementación del CRUD
//CREATE
router.post('/create', routeHelper(async (req, res)=>{
    let nuevoUsario = new modeloUsuario({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cargo: ecargos(req.body.cargo),
        email: req.body.email,
        contrasenia: req.body.contrasenia,
        bloqueado: req.body.bloqueado,
        rol: eroles(req.body.rol)
    });
    nuevoUsario.save(function(err, datos){
        if (!err) {
            res.send("El usuario se creo exitosamente." + datos.id);
        } else {
            res.send(err.stack);
        }
    });
}));

/* router.post('/create', routeHelper(async (req,res)=>{
    let nuevoUsario = new modeloUsuario({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cargo: ecargos(req.body.cargo),
        email: req.body.email,
        contrasenia: req.body.contrasenia,
        bloqueado: req.body.bloqueado,
        rol: eroles(req.body.rol)
    });
    nuevoUsario.save(function(){
        res.send("El usuario se creo exitosamente.");
    });
})); */


//READ ALL
router.get('/list', routeHelper(async (req, res)=>{
    modeloUsuario.find({}, function(err, docs){
        if (!err) {
            res.send(docs);
        }
        else {
            res.send(err.stack);
        }
    });
}));

//READ
router.get('/read/:_id', routeHelper(async (req,res)=>{
    modeloUsuario.find({_id:req.params._id},function(err,docs){
        if (!err) {
            res.send(docs);
        }
        else {
            res.send(err.stack);
        }
    });
}));

//UPDATE
router.post('/update/:_id', routeHelper(async (req,res)=>{
    modeloUsuario.findOneAndUpdate({_id:req.params._id},
        {
            nombres : req.body.nombres,
            apellidos : req.body.apellidos,
            cargo : req.body.cargo,
            email : req.body.email,
            contrasenia : req.body.contrasenia,
            bloqueado : req.body.bloqueado,
            rol : req.body.rol
        },(err)=>{
            if (!err) {
                res.send("El usuario se actualizo exitosamente.");
            } else {
                res.send(err.stack);
            }    
        });
}));

//DELETE
router.delete('/delete/:_id', routeHelper(async (req,res)=>{
    modeloUsuario.findOneAndDelete({_id:req.params._id},(err)=>{
        if (!err) {
            res.send("El usuario se elimino exitosamente.");
        }
        else {
            res.send(err.stack);
        }
    });
}));

/* router.delete('/delete/:_id', routeHelper(async (req,res) => {
    modeloUsuario.findOneAndDelete({_id:req.params._id},() => {
        res.send("El usuario se elimino exitosamente.");
    });
})); */

module.exports = router;