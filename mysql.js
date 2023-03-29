const mysql = require('mysql');

const connection = mysql.createConnection({
host : 'localhost',
user : 'nodejs',
password: 'xxia1215@@',
database : 'opentutorials'
});

connection.connect();

 connection.query('SELECT * FROM topic', function (error, results,fields){
  if(error){
    console.log(error);
  }
  console.log(results);
  // fs.writeFileSync("results.JSON",JSON.stringify(results,null,2), "utf8");

});
//  fs.writeFileSync("a.JSON",JSON.stringify(members,null,2), "utf8");
connection.end();

