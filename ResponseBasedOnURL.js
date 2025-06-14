const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>
                    Sending Response to Client Based on URL
                </title>
            </head>
    `);
    if(req.url === '/'){
        res.write(`
            <body>
                <h1> This is a Response for Home <h1>
            </body>
        </html>    
    `)} else if(req.url == '/page1'){
        res.write(`
            <body>
                <h1> This is a Response for Page1 <h1>
            </body>
        </html>    
    `)} else {
        res.statusCode = 404; //Doubt in this   
    }    
    res.end();
});

server.listen(PORT, () =>{
    console.log(`Server started and running at http://localhost:${PORT}`);
});