const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // parse the URL and query string
  const parsedUrl = url.parse(req.url, true);
  const iso = parsedUrl.query.iso;

  // check the endpoint and respond accordingly
  if (parsedUrl.pathname === '/api/parsetime') {
    const date = new Date(iso);
    const response = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else if (parsedUrl.pathname === '/api/unixtime') {
    const unixtime = new Date(iso).getTime();
    const response = { unixtime };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else {
    // return a 404 response for any other endpoints
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.argv[2]);