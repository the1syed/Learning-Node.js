const express = require('express');
const PORT = 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});

app.use((req, res, next) =>{
    console.log("First middleware", req.url, req.method);
    next();
});

app.use((req, res, next) => {
    console.log("Second middleware", req.url, req.method);
    next();
})

app.get("/", (req, res, next) => {
    console.log("Third middleware", req.url, req.method);
    res.send("<p> Third MiddleWare </p>")
})

app.get("/contact-us", (req, res, next) => {
    console.log("GET /contact-us middleware", req.url, req.method)
    res.send(`
        <h1> Provide your details </h1>
        <form action = "/contact-us" method = "POST">
        <input type = "text" name = "name" placeholder = "Name">
        <input type = "email" name = "email" placeholder = "Email">
        <button type = submit> Submit </button>
        </form>
        `)
    }
)

app.post("/contact-us", (req, res, next) => {
    console.log("POST /contact-us middleware", req.url, req.method)
    res.send(`
        <p> POST contact-us </p>
        `)
    })
    
    
    
