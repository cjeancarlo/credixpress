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
        return ({
            error: {
                message: error.sqlMessage,
                code: error.code
            }
        });
    } else { return  (null, { error: error }); }
}
//connection.connect();
module.exports = connection;