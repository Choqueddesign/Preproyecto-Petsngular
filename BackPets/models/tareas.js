const{Schema, model} = require("mongoose");

const tareaSchema = new Schema({
    nombre:{
        type: String
    },
    tarea:{
        type: String
    },
    estado:{
        type: String
    },
    fecha:{
        type: Number
    },
    comentario:{
        type: String
    },
    horaInicio:{
        type: Number
    },
    horaFinal:{
        type: Number
    }
});

module.exports = model("tareas",tareaSchema,"TareasEmpleados");