// Inicialización del servidor
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola, el servidor está funcionando');
});

app.listen('3000', () =>{
    console.log('Servidor iniciado en http://localhost:3000');
});