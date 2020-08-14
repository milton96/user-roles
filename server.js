const express = require('express');

// Inicializar
const app = express();

// Configurar
app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(require('./routes/index.routes'));
//app.use(require('./routes/project.routes'));

module.exports = app;