const express = require('express');
const homeController = require("../controllers/home");

const hostRouter = express.Router();

hostRouter.get("/host/add-home", homeController.getAddHome)

hostRouter.post("/host/add-home",homeController.postAddHome)

exports.hostRouter = hostRouter;
