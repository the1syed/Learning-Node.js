const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader("Content-Type", "text/html");
    if(req.url == '/home'){
        res.write("<h1> This is HOME");      
        return res.end();  
    } else if(req.url == '/men'){
        res.write("<h1> This is MEN");
        return res.end();
    } else if(req.url == '/women'){
        res.write("<h1> This is WOMEN");
        return res.end();
    } else if(req.url == '/kids'){
        res.write("<h1> This is KIDS");
        return res.end();
    } else if(req.url == '/cart'){
        res.write("<h1> This is CART");
        return res.end();
    }
    res.write(`
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Navigation</title>
            </head>
            <body>
                <nav>
                    <ul>
                        <li> <a href = "/home"> HOME </a></li>
                        <li> <a href = "/men"> MEN </a></li>
                        <li> <a href = "/women"> WOMEN </a></li>
                        <li> <a href = "/kids"> KIDS </a></li>
                        <li> <a href = "/cart"> CART </a></li>
                    </ul>
                </nav>
            </body>
        </html>
    `)
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:3000`);
})