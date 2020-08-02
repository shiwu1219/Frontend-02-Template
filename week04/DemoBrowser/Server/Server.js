const http = require("http");

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    // body.push(Buffer.from(chunk.toString(), 'utf8'));
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log("body:", body);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end("Hello World!");
  });

}).listen(8088);

console.log("Sever started");