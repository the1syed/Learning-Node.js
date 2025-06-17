const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/host/add-home",(req, res, next) => {
    console.log(req.url, req.method);
    res.send(`
        <h1> Register your home here: </h1>
        <form action = "/host/add-home" method = "POST">
            <input type="text" name="houseName" placeholder="Enter house"/>
            <input type="submit"/>
        </form>
    `);
})

hostRouter.post("/host/add-home",(req, res, next) => {
    console.log(req.url, req.method);
    res.send(`
    <h1> Registeration Successfull<br> Details: </h1>
    <p> ${req.body.houseName} is registered </p>
    <a href="/"> Go to Home</a>
    `);
})

module.exports = hostRouter;