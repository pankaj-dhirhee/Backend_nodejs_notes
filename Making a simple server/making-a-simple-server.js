const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end('<h1 style="color: red"> I am an html text </h1>');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
});

/* Try =>
   * res.setHeader('Content-type', 'text/plain');
     It serves text as a plain text;
   * _ => Underscore means previous variable.
*/