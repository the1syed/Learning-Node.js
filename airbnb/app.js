const express = require('express');
const hostRouter = require('./routes/hostRouter');
const userRouter = require('./routes/userRouter');
const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended:true}));

app.use(userRouter);
app.use(hostRouter);

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
})