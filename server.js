const http = require('http'); //node js
const hostname = 'localhost'; // localhost
const port = 3000; //0-->65355

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n hoi Nguyen Quang Hai voi eric');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});