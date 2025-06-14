const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>
                    Sending Response to Client
                </title>
            </head>
            <body>
                <h1> This is a Response <h1>
            </body>
        </html>    
    `)
    res.end();
});

server.listen(PORT, () =>{
    console.log(`Server started and running at http://localhost:${PORT}`);
});