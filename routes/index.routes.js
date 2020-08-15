const { Router } = require('express');
const router = Router();
const { isLogged, validRole } = require('../auth/basicAuth');
const { ROLE } = require('../data');

router.get('/', (req, res) => {
    res.send('Index');
});

router.get('/dashboard', isLogged, (req, res) => {
    res.send('Dashboard');
});

router.get('/admin', isLogged, validRole(ROLE.ADMIN), (req, res) => {
    res.send('Admin');
});

module.exports = router;