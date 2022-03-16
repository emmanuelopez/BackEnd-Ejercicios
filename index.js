const mongoose = require('mongoose');
const model = require('./models/estudiante');

CRUD()

async function CRUD () {
    try{
        //connection to database
        const URL = 'mongodb://localhost:27017/colegio'
        let rta = await mongoose.connect(URL, {});   
        console.log(rta);
        console.log('Base de datos conectada');

        //create
        console.log('Create');
        const estudiante = 
            {nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7}
            /*{nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8},
            {nombre: 'Jose', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6},
            {nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10},
            {nombre: 'Maria', apellido: 'Garcia', edad: 36, dni: '29575148', curso: '1A', nota: 9},
            {nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '32011832', curso: '2A', nota: 5},
            {nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4},
            {nombre: 'Carlos', apellido: 'Fernandez', edad: 33, dni: '26935670', curso: '3B', nota: 2},
            {nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '43153881', curso: '1B', nota: 9},
            {nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2},*/
        const estudianteSaveModel = model(estudiante);
        let estudianteSave = await estudianteSaveModel.save();
        console.log(estudianteSave);

        //read
        console.log('Read all');
        let estudiantes = await model.find({});
        console.log(estudiantes);
    }    
    catch(error){
        console.log(`error en CRUD: ${error}`);
        throw new Error('Error al conectarse a la base de datos');
    }
}
