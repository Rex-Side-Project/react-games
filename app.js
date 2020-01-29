const express = require('express');
const http = require('http');
const path = require('path');
const port = process.env.PORT || '8080';

let app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.set('port', port);

app.get('/Game/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/123', function (req, res) {
    console.log("123");
});

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Running on localhost:${port}`);
});