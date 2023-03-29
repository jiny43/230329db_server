const http =require('http');

const hostname = 'localhost';
const port = 3000;

const mysql = require('mysql');
const { title } = require('process');
const db = mysql.createConnection({
host : 'localhost',
user : 'nodejs',
password: 'xxia1215@@',
database : 'opentutorials'
});

db.connect();

let body = "";
body += "<!DOCTYPE html>";
body += "<html>";
body += "<head>";
body += "<title>Node.js</title>";
body += "</head>"
body += "<body>"
body += "<h1>Login</h1>"
body += "<button>login</button>"
body += "</body>"
body += "</html>"

const server = http.createServer((req,res)=>{
  db.query('SELECT * FROM topic', function (error, topics){
    console.log(topics);
    
  });
  res.statusCode = 200;
  res.end(body);
});

server.listen(port, hostname, ()=>{
  console.log(`Server running `);
});

