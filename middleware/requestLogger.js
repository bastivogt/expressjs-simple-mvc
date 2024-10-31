function requestLogger(req, res, next) {
    console.log(req.path);
    next();
}

module.exports = {
    requestLogger,
};

// module.exports.requestLogger = (req, res, next) => {
//     console.log(req.path);
//     next();
// };
