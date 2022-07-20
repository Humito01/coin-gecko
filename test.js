var http = require("http");
var CoinGecko = require("coingecko-api")
const CoinGeckoClient = new CoinGecko();
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World. This page is running Node.js version: ");
  response.write(process.version);
  response.end();
}).listen(8888);