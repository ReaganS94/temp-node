const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hola cabron");
  }
  if (req.url === "/about") {
    res.end("cabron's history");
  }
  res.end(`<h1>Oops!</h1>
  <p>We can't seem to find the page you requested</p>
  <a href='/'>back to home</a>
  `);
});

server.listen(5000);
