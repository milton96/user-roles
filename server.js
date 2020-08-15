const express = require('express');
const users = require('./data').USERS;

// Inicializar
const app = express();

// Configurar
app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));

// Middelwares
app.use(express.json());
app.use(setUser);

// Rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/project.routes'));

function setUser(req, res, next) {
    const userId = req.body.userId;
    if (userId) {
        req.user = users.find(user => user.id == userId) || null;
    }
    next();
}

module.exports = app;