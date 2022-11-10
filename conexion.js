const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jenriqueph:Indetex1234@clusterindetex.ujokdbu.mongodb.net/IndetexDB?retryWrites=true&w=majority");
const miconexion = mongoose.connection;

miconexion.on('connected',()=>{
    console.log("Conexión establecida a la base de datos de MongoDB de forma exitosa.");
})

miconexion.on('error',()=>{
    console.log('No se pudo establecer la conexión a la base de datos de MongoDB.');
})

module.exports = mongoose;