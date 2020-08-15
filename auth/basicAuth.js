function isLogged(req, res, next) {
    if (req.user === null || req.user === undefined) {
        res.status(403);
        return res.send('En necesario iniciar sesión.');
    }
    next();
}

module.exports = {
    isLogged
}