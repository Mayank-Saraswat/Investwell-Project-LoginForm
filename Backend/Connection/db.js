//db connection
const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'investwelldb',
    password: 'Mayank123@'
});

// connection.connect(function (error) {
//     if (error)
//         throw error;
//     else
//         console.log("Connected!!");
// })

module.exports = connection;  //To make this file  importable

