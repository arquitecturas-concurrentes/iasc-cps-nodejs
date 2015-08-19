var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")

function writeError(err, response) {
    writeResponse({ status: 500, contentType: "text/plain", content: err + "\n" })
}

function writeResponse(data, response) {
    response.writeHead(data.status, data.contentType);
    response.write(data.content, data.mode);
    response.end();
}

function trueFilenameFor(stats, filename) {
    if (stats.isDirectory()) { 
        return filename + '/index.html';
    } else {
        return filename;
    }
}

port = process.argv[2] || 8080;

http.createServer(function (request, response) {

    var uri = url.parse(request.url).pathname
        , filename = path.join(process.cwd(), uri);

    var contentTypesByExtension = {
        '.html': "text/html",
        '.css': "text/css",
        '.js': "text/javascript"
    };

    fs.exists(filename, function (exists) {
        if (!exists) {
            writeResponse({ status: 400, contentType: "text/plain", content:  "404 Not Found\n" }, response);
            return;
        }

        fs.stat(filename, function (err, stats) {
            if (err) {
                writeError(err, response);
                return;
            }

            var trueFilename = trueFilenameFor(stats, filename);

            fs.readFile(trueFilename, "binary", function (err, file) {
                if (err) {
                    writeError(err, response);
                    return;
                }
                writeResponse({ 
                    status: 200, 
                    contentType: contentTypesByExtension[path.extname(trueFilename)] || "text/plain", 
                    content:  file, 
                    mode: "binary" }, 
                response);
            });
        });
    });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
