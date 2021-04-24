const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

console.log("Initialized variables, creating server")

http.createServer((req, res) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Hello World! This is Alex Russell\'s Udacity capstone!');
}).listen(port, hostname, 511, () => {
    console.log(`Listening at ${hostname}:${port}`);
});

