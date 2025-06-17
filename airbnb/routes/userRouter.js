const express = require('express');
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    res.send(`
        <h1> Welcome to airBnB </h1>
        <a href="/host/add-home"> Add your property </a>
    `)
})

module.exports = userRouter;