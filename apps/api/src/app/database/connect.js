'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dmax224*',
    database: 'credix'
});


connection.executeQuery = function executeQuery(query, param, result, Dmlreturn = false, returnQuery = null) {

    connection.query(query, param, function (err, res) {
        try {
            if (err) throw err;
            if (Dmlreturn) {
                executeQuery(returnQuery, res.insertId === 0 ? param : res.insertId, result);
                return;
            }
            result(null, res);
        } catch (error) {
            result(null, handlerError(error));

        }
    });
};

function handlerError(error) {
    if (error.sqlMessage) {
        return (translateError(error));
    } else { return  (null, { error: error, handled: 'no' }); }
}

function translateError(error){

    var col = error.sqlMessage.substring(
        error.sqlMessage.indexOf("'") + 1, 
        error.sqlMessage.lastIndexOf("'")
    );
    
    switch (error.code) {
     case "ER_WARN_DATA_OUT_OF_RANGE":
           return "Valor fuera de Rango para el campo" + col; 
     default:
            return error;
 }

}
//connection.connect();
module.exports = connection;