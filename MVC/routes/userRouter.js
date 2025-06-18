const express = require('express');
const homeController = require('../controllers/home');

const userRouter = express.Router();

userRouter.get("/", homeController.getHomes)

module.exports = userRouter;