/// <reference path="../typings/globals/node/index.d.ts" />

import http = require("http");
import url = require("url");

//
main();

function main()
{
    //
    //console.log(process.mainModule.paths);

    var http_server = http.createServer(onRequest);
    http_server.listen(2200, "0.0.0.0");

    console.log("Server listen port 2200.");
}

function onRequest(request, response)
{
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello world");
    response.end();
}