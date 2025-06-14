const http = require('http');
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
                <form action = "submit" method = "POST">
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
    } 
});

server.listen(PORT, () => {
    console.log(`Server started and running at http://localhost:${PORT}`);
})