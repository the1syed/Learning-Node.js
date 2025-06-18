const path = require('path');
const root = require('../utils/paths');

exports.pageNotFound = (req, res, next) => {
    res.status(404).sendFile(path.join(root, "views", "404.html"));
}