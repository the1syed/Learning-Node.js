const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const root = require("../utils/paths");

const contactRouter = express.Router();

contactRouter.use(bodyParser.urlencoded({extended:true}));

contactRouter.get("/contactUs", (req, res, next) =>{
    console.log(req.url, req.method);
    res.sendFile(path.join(root, "views", "contactUs.html"))
})

contactRouter.post("/detailsFilled", (req, res, next) =>{
    console.log(req.url, req.method);
    console.log(req.body.name);
    console.log(req.body.email);
    res.sendFile(path.join(root, "views", "detailsFilled.html"))
})

module.exports = contactRouter;