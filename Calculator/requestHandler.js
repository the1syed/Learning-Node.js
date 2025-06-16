const { sum } = require('./add');

const handler = (req, res) => {
    console.log(req.url, req.method);
    if(req.url.toLowerCase() == '/'){
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
                <head>
                    <title> Calculator </title>
                </head>
                <body> 
                    <h1> Welcome. </h1>
                    <h2> Have something to calculate? </h2>
                    <a href = "/calculator"> Calculator </a>
                </body>
            </html>
        `)
        res.end();
    } else if(req.url == '/calculator'){
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
                <head>
                <title> Calculator </title>
                </head>
                <body>
                <h1 text-align="center"> Calculator </h1>
                <form action = "/calculate-result" method = "POST">
                <input type = "text" placeholder = "First Number" name = "num1"/>
                <input type = "text" placeholder = "Second Number" name = "num2">
                <button type = "submit"> Sum </button>
                </form>
                </body>
            </html>
        `)
        res.end();
    } else if(req.url.toLowerCase() == "/calculate-result" && req.method == "POST"){
        sum(req,res);
    } else {
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
                <head>
                    <title> Calculator </title>
                </head>
                <body> 
                    <h1> 404 Not Found </h1>
                    <a href = "/"> HOME </a>
                </body>
            </html>
        `)
        res.end();
    }
}


module.exports = handler;