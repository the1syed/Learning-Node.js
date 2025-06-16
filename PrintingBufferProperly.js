const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if(req.url == '/'){
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
                <head>
                    <title> Taking Input as Request </title>
                </head>  
        `);
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
        </html>        
        `);
        return res.end();
    } else if (req.method == "POST" && req.url.toLowerCase() === "/submit_details"){
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on("end", () =>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const params = new URLSearchParams(parsedBody);
            const jsonObject = {};
            for(const [key, value] of params.entries()){
                jsonObject[key] = value;
            }
            console.log(jsonObject);
        });
        fs.writeFileSync("user-details.txt", "John Doe3");
        res.setHeader("Location", "/");
        res.statusCode = 302;
        return res.end();
    }else if (req.url === "/data_received") {
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
                <head><title>Success</title></head>
                <body>
                    <h1>Details saved successfully.</h1>
                </body>
            </html>
        `);
        return res.end();
    } else {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 404;
        res.write(`
            <html>
                <head><title>404 Not Found</title></head>
                <body>
                    <h1>Page not found</h1>
                </body>
            </html>
        `);
        return res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server started and running at http://localhost:${PORT}`);
});
