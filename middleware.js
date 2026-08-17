const requestRoute = async (req, res, next) => {
    console.log(`Request received: ${req.method}/api${req.url}`);
    next();
}

module.exports = requestRoute;