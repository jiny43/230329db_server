const http =require('http');

const hostname = 'localhost';
const port = 3000;

const mysql = require('mysql')
const db = mysql.createConnection({
host : 'localhost',
user : 'nodejs',
password: 'xxia1215@@',
database : 'opentutorials'
});

db.connect();


const server = http.createServer((req,res)=>{
  db.query('SELECT * FROM topic', function (error, topic){
    console.log(topic);
  });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hi');
});

server.listen(port, hostname, ()=>{
  console.log(`Server running `);
});

