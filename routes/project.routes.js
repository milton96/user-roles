const { Router } = require('express');
const router = Router();
const projects = require('../data').PROJECTS;

router.get('/projects', (req, res) => {
    res.json(projects);
});

router.get('/projects/:projectId', (req, res) => {
    const project = projects.find(project => project.id == req.params.projectId);
    res.json(project);
});

module.exports = router;