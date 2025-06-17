const path = require('path');

const express = require('express');

const root = require("../utils/paths")

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(root, "views", "home.html"));
})

module.exports = userRouter;