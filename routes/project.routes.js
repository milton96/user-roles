const { Router } = require('express');
const router = Router();
const { PROJECTS } = require('../data');
const { isLogged } = require('../auth/basicAuth');
const { canViewProject, scopedProjects } = require('../permissions/project');

router.get('/projects', isLogged, (req, res) => {
    res.json(scopedProjects(req.user, PROJECTS));
});

router.get('/projects/:projectId', isLogged, getProject, authGetProject, (req, res) => {
    res.json(req.project);
});

function getProject(req, res, next) {
    const projectId = parseInt(req.params.projectId);
    req.project = PROJECTS.find(project => project.id === projectId);

    if (req.project === null || req.project === undefined) {
        res.status(404);
        return res.send('Proyecto no encontrado.');
    }

    next();
}

function authGetProject(req, res, next) {
    if (!canViewProject(req.user, req.project)) {
        res.status(401);
        return res.send('No tienes permiso para ver el proyecto.');
    }

    next();
}

module.exports = router;