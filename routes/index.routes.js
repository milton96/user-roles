const { Router } = require('express');
const router = Router();
const { isLogged } = require('../auth/basicAuth');

router.get('/', (req, res) => {
    res.send('Index');
});

router.get('/dashboard', isLogged, (req, res) => {
    res.send('Dashboard');
});

router.get('/admin', (req, res) => {
    res.send('Admin');
});

module.exports = router;