const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const rutas = require('./Routers/routers');

//Initiliazations
const app = express();
const miconexion = require('./conexion');

//Settings
app.set('port', process.env.PORT || 5000);

//Middlewar
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));


//Global Variables

//Routes
app.use('/api',rutas);
app.get('/', (req, res) => {
    res.send( "<h1>El inicio de mi API</h1><br><p>Servidor Backend corriendo OK! <button>Aceptar</button></p>")
});

//Static Files

//Server is listenning
app.listen(app.get('port'),()=>console.log("Servidor corriendo en el puerto", app.get('port'), "http://127.0.0.1:5000"));