const path = require('path');

const express = require('express');

const root = require("../utils/paths");

const hostRouter = express.Router();
hostRouter.get("/host/add-home",(req, res, next) => {
    console.log(req.url, req.method);
    res.sendFile(path.join(root, "views", "add-home.html"));
})

const homes = [];

hostRouter.post("/host/add-home",(req, res, next) => {
    console.log(req.url, req.method);
    console.log(req.body);
    homes.push(req.body);
    res.sendFile(path.join(root, "views", "homeadded.html"));
})

exports.hostRouter = hostRouter;
exports.homes = homes;