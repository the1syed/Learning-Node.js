const path = require('path');
const root = require("./utils/paths")
const express = require('express');
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');

const app = express();

app.use(homeRouter);
app.use(contactRouter);
app.use((req,res, next) => {
    res.sendFile(path.join(root, "views", "404.html"));
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})