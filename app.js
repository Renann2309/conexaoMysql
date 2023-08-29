const express = require('express');
const app = express();

const db = require('./db');

app.get("/", async (req, res) => {
    res.send("Página Inicial");

});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");

});