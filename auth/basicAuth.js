function isLogged(req, res, next) {
    if (req.user === null || req.user === undefined) {
        res.status(403);
        return res.send('En necesario iniciar sesión.');
    }
    next();
}

function validRole(role) {
    return (req, res, next) => {
        if (req.user.role !== role) {
            res.status(403);
            return res.send('No tienes permisos para acceder a esta sección.');
        }
        next();
    }
}

module.exports = {
    isLogged,
    validRole
}