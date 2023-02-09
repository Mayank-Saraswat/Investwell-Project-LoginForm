const mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'investwelldb',
    password: 'Mayank123@'
});

connection.connect(function (error) {
    if (error)
        throw error;
    else
        console.log("Connected!!");
})
// module.exports = connection; ---> to make this file  importable

var express = require('express');
const bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('frontend'));

//get api to show html form
app.get('/show', function (req, res) {
    res.sendFile(__dirname+"/frontend/index.html");
});

//get api to fetch all data from database
app.get('/fetch', (req, res) => {
    connection.query(
        'SELECT * FROM userdata',
        function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(results);
            }
        }
    )
}
)

app.post('/insert', function (req, res) {
    //console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    // console.log(name);
    // console.log(email);
    // console.log(password);

    connection.connect(function (error) {
        if (error) throw error;  

        connection.query("INSERT INTO userdata(name, email, password) VALUES ('" + name + "','" + email + "','" + password + "')",
         function (error, result) {
            if (error) throw error;
            res.send("User registered successfully!!");
        });
    });
});

// delete api to delete data from user
app.delete('/form/:name', (req, res) => {
    connection.query('delete from userdata where Name=?', [req.params.name], (err, rows) => {
        if (err)
            console.log(err);
        else
           console.log (res.send(rows))}
    )
});

app.listen(3001);