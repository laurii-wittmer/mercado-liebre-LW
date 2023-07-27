const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const publicFolderPath = path.resolve(__dirname, './public');
app.use (express.static(publicFolderPath));

const PORT = process.env.PORT || 3001;

app.listen (PORT, () => {
    console.log ('servidor corriendo en el puerto 3001');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})