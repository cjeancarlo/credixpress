'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Dmax224*',
    database : 'credix'
});

//connection.connect();

module.exports = connection;