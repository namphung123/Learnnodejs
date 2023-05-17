const http = require("http");

const server = http.createServer((req, res) => {
  console.log("run request");
  res.setHeader("Content-type", "text/html");
  res.write("<h3>Hello world</h3>");
  res.write("<h2>My name is Nam Phung</h2>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Nodejs server is running on PORT: 3000");
});
