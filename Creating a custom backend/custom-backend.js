const http = require('http');
const fs = require('fs');

// Pages
const home_page = fs.readFileSync('home.html');
const about_page = fs.readFileSync('about.html');
const contact_page = fs.readFileSync('contact.html');
const not_found = fs.readFileSync('404page.html');

 const server = http.createServer((req, res) => {
   res.writeHead(200, {'Content-type': 'text/html'});
   const url = req.url;
   
   if(url == '/'){
     res.end(home_page);
   }
   else if(url == '/about'){
     res.end(about_page);
   }
   else if(url == '/contact'){
     res.end(contact_page);
   }
   else{
     res.end(not_found)
   }
 });
 
 const port = 3000;
 server.listen(port, () => {
   console.log(`Server is listening at http://localhost:${port}`)
 });