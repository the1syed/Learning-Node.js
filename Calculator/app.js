const http = require('http');
const add = require('./add');
const handler = require('./requestHandler');
const {sum} = require('./add');

const PORT = 3000;

const server = http.createServer(handler);

server.listen(PORT, () => {
    console.log(`Server : http://localhost:${PORT}`);
})