const Tareas = require("../models/tareas");


const listarTareasEmpleados = (req,res) =>{
    console.log("funciono listar")
   Tareas.find((err, tareas) => {
        if (err) return res.send(err)
        return res.send(tareas)
    })
}


const updateFecha = (req,res) =>{
    
}


const buscarEstadoTarea= (req,res) =>{
    
}


const buscarComentario= (req,res) =>{
    
}


const buscarTimepoUsadoTareas = (req,res) =>{
    
}


const nuevaTarea= (req,res) =>{
    
}


const calcularTiempoDia = (req,res) =>{
    
}

module.exports = {
    listarTareasEmpleados,
    updateFecha,
    buscarEstadoTarea,
    buscarComentario,
    buscarTimepoUsadoTareas,
    nuevaTarea,
    calcularTiempoDia
}