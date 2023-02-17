//db connection
const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'investwelldb',
    password: 'Mayank123@'
});

module.exports = connection;  //To make this file  importable

