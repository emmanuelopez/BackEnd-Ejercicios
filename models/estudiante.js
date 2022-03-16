const mongoose = require('mongoose')

const estudianteCollection = 'estudiantes';

const estudianteSchema = new mongoose.Schema({
    nombre: {type: String, require: true},
    apellido: {type: String, require: true},
    edad: {type: Number, require: true},
    dni: {type: String, require: true},
    curso: {type: String, require: true},
    nota: {type: Number, require: true},
})

module.exports = mongoose.model(estudianteCollection, estudianteSchema);
