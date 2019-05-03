'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Dmax224*',
    database : 'credix'
});


connection.executeQuery = function executeQuery(query, param, result, Dmlreturn = false, returnQuery = null ) {

   connection.query(query, param, function (err, res ) {
        if(err) {
            if (err.sqlMessage) {
                result ( null, { error: {
                    message:err.sqlMessage,
                    code: err.code
                } });
            }else {
                result (null , { error: err });
            }
        } else{
            if (Dmlreturn){
                executeQuery(returnQuery, res.insertId === 0 ? param : res.insertId  , result);
                return;
            }
            result(null, res);
        }
        });   
    
    
    };
    

//connection.connect();
module.exports = connection;