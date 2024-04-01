const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const file = fs.readFileSync('file.html', 'utf-8');
  res.writeHead(200, {'Content-type': 'text/html'});
  res.end(file);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});