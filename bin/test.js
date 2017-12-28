"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
main();
function main() {
    var http_server = http.createServer(onRequest);
    http_server.listen(2200, "0.0.0.0");
    console.log("Server listen port 2200.");
}
function onRequest(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello world");
    response.end();
}
//# sourceMappingURL=test.js.map