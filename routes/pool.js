var mysql = require('mysql')
require('dotenv').config()

const pool = mysql.createPool({

   host:'localhost',
  ///host : 'localhost',
   user: 'root',
  password:'123',
  // password : '123',
    database: 'organ_donation',
    port:'3306' ,
    multipleStatements: true
  })


module.exports = pool;
