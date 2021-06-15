const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Crear servidor
const app = express();

// Conectar db
conectarDB();

// Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(cookieParser());

app.use(cors());

app.use('/agenda/usuarios', require('./routes/usuario'));

app.listen(4000, ()=>{
    console.log('Servidor corriendo en el puerto 4000');
})