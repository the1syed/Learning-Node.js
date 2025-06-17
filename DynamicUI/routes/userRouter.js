const path = require('path');
const express = require('express');
const root = require("../utils/paths")
const {homes} = require("./hostRouter");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    console.log(homes);
    res.render('home', {homes : homes, pageTitle : "AirBnB Homes"});
})

module.exports = userRouter;