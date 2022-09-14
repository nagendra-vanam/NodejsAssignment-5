var http = require("http");
const path = require("path");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  const pathname = req.url;
  if (pathname == "/welcome") {
    res.writeHead(200, { "content-type": "text/plane" });
    res.end("WELCOME TO DOMINOS ");
  } else if (pathname == "/contact") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      "{   phone: '18602100000',   email: 'guestcaredominos@jublfood.com' }"
    );
  } else {
    res.writeHead(404);
    res.end("page not found");
  }
}
httpServer.listen(8081);

module.exports = httpServer;
