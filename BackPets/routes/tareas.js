const express = require("express");
const {listarTareasEmpleados,updateFecha,buscarEstadoTarea,buscarComentario,buscarTimepoUsadoTareas,nuevaTarea,calcularTiempoDia}= require('../controllers/tareasController');

const Tareas = express.Router();

//Para gerente
Tareas.get('/',listarTareasEmpleados);
Tareas.patch('/',updateFecha);
Tareas.get('/estado',buscarEstadoTarea);
Tareas.get('/comentario',buscarComentario);
Tareas.get('/tiempoUsado',buscarTimepoUsadoTareas);
Tareas.post('/',nuevaTarea);
Tareas.get('/tiempoTotalDia',calcularTiempoDia)


//Para empleado
/*
Tareas.patch('/horaInicial',updateHoraInicial);
Tareas.patch('/horaFinal',updateHoraFinal);*/

module.exports ={
    Tareas
}