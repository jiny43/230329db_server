const mysql = require('mysql');
const fs = require('fs');
const connection = mysql.createConnection({
host : 'localhost',
user : 'nodejs',
password: '1234',
database : 'opentutorials'
});

connection.connect();

 connection.query('SELECT * FROM topic', function (error, results,fields){
  if(error){
    console.log(error);
  }
  console.log(results);
  fs.writeFileSync("results.JSON",JSON.stringify(results,null,2), "utf8");
});
//  fs.writeFileSync("mebers.JSON",JSON.stringify(members,null,2), "utf8");
connection.end();

