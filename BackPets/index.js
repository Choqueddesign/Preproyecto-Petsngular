const express = require("express");
const cors = require("cors");
const {connectDB} = require("./db/db");
const app = express();
const {tareasRoutes} = require("./routes/tareas");
connectDB();

const puerto = 3030;

app.use (express.json());
app.use (cors());
app.use('/tareas', tareasRoutes);

//app.use ('/usuarios', usuarios);
//app.use ('/tareas', tareas);

app.listen(puerto,()=>{
    console.log("Estoy escuchando en http://localhost:" + puerto)
});