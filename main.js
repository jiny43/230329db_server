const http =require('http');
const tamplate =require('./template');
const hostname = 'localhost';
const port = 3000;

const mysql = require('mysql');
const { title } = require('process');
const template = require('./template');
const db = mysql.createConnection({
host : 'localhost',
user : 'nodejs',
password: 'xxia1215@@',
database : 'opentutorials'
});

db.connect();

// let body = "";
// body += "<!DOCTYPE html>";
// body += "<html>";
// body += "<head>";
// body += "<title>Node.js</title>";
// body += "</head>"
// body += "<body>"
// body += "<h1>Login</h1>"
// body +=  `<ul><li><a href="/?id=topics1"> topics1.title </a></li></ul>`;
// body += "</body>"
// body += "</html>"

// const url = "results.JSON";
// const data = JSON.parse(url);
// console.log(data);
// fetch("results.json")
//   .then(res => res.json()) 
//   .then(data => console.log(data));
// console.log(data);

// fetch('results.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
    
//   })
//   .catch(error => console.error(error));


const server = http.createServer((req,res)=>{
  db.query('SELECT * FROM topic', function (error, topics){
    console.log(topics);
    let title= 'haha..';
    let description = 'hello';
    let list = template.list(topics);
    let html = template.HTML(title,list,
      `<h2>${title}</h2>${description}`,
      `<a href="/create">아....</a>`
      )
    
    res.statusCode = 200;
    res.end(html);
})});

server.listen(port, hostname, ()=>{
  console.log(`Server running `);
});

