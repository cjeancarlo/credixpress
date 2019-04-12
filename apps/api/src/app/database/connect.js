'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Dmax224*',
    database : 'credix'
});


connection.executeQuery = function executeQuery(query, param, result) {
    connection.query(query, param, function (err, res) {
        if(err) {
            console.log("error: ", err, param);
            result(err, null);
        }
        else{
            result(null, res);
        }
        });   
    }

//connection.connect();

module.exports = connection;