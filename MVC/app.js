const path = require('path');

const express = require('express');

const {hostRouter} = require('./routes/hostRouter');
const userRouter = require('./routes/userRouter');
const root = require('./utils/paths');
const errorsController = require('./controllers/errors');
const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(root, "public")));

app.use(userRouter);
app.use(hostRouter);

app.use(errorsController.pageNotFound);

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
})