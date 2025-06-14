const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
            <head>
                <title> Taking Input as Request </title>
            </head>  
    `);
    if(req.url == "/"){
        res.write(`
            <body>
                <h1> Home </h1>
                <form action = "/submit_details" method = "POST">
                    <input type = "text" id = "name" name = "name" placeholder = "Enter your name"><br>
                    <label for = "gender"> Gender: </label>
                    <input type = "radio" id = "male" name = "gender" value = "male">
                    <label for = "male"> Male </label>
                    <input type = "radio" id = "female" name = "gender" value = "female">
                    <label for = "female"> Female </label><br>
                    <button type = "Submit"> Submit </button>
                </form>
            </body>        
        `)
        res.end();
    } else if(req.method == "POST" && req.url.toLowerCase() === "/submit_details"){
        fs.writeFileSync("user-details.txt", "John Doe");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server started and running at http://localhost:${PORT}`);
})