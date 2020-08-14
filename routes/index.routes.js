const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Index');
});

router.get('/dashboard', (req, res) => {
    res.send('Dashboard');
});

router.get('/admin', (req, res) => {
    res.send('Admin');
});

module.exports = router;