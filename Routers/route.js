const Enum = require('enum');

//Declaro objetos Enum
//Enum Roles
let roles = new Enum({
    'Administrador': 1,
    'Cliente': 2
});

//Enum Cargos
let cargos = new Enum({
    'Administrador Junior': 1,
    'Administrador Senior': 2,
    'Administrador Elite': 3,
    'Asistente Administrativo': 4,
    'Aprendiz': 5
});

//Función para acceder al valor del Enum Roles
function eroles(opc){
    let i = parseInt(opc);
    let valor="No definido";
    for (const rol of roles) {
        if (i==rol.value){
            valor=rol.key;
            break;
        }
    }
    return valor;
};

//Función para acceder al valor del Enum Cargos
function ecargos(opc){
    try {
        let i = parseInt(opc);
        let valor="No definido";
        for (const cargo of cargos) {
            if (i==cargo.value){
                valor=cargo.key;
                break;
            }
        }
        return valor;            
    } catch (error) {
        console.log(error);
        return valor;
    }
};

//Funcion para controlar los errores
function routeHelper(callback) {
    return async (req, res) => {
        try {
            await callback(req, res);
        } catch (error) {
            res.status(400).json({
                status: 'error',
                message: error.message,
            });
        }    
    };
}

//funcion que hace tiempo
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

/*
//funcion que genera el error
function addUserToDB() {
    return new Promise((resolve,reject) => setTimeout(() => reject(new Error('hubo un problema')),500));
}
*/

module.exports = {
    routeHelper,
    sleep,
    ecargos,
    eroles,
};