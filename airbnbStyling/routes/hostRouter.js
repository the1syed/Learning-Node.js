const path = require('path');

const express = require('express');

const root = require("../utils/paths");

const hostRouter = express.Router();
hostRouter.get("/host/add-home",(req, res, next) => {
    console.log(req.url, req.method);
    res.sendFile(path.join(root, "views", "add-home.html"));
})

hostRouter.post("/host/add-home",(req, res, next) => {
    console.log(req.url, req.method);
    console.log(req.body);
    res.sendFile(path.join(root, "views", "homeadded.html"));
})

module.exports = hostRouter;