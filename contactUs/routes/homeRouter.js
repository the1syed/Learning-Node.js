const path = require('path');

const root = require("../utils/paths");

const express = require('express');

const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
    console.log(req.url, req.method);
    res.sendFile(path.join(root, "views", "home.html"));
})

module.exports = homeRouter;