var sql = require('../database/connect.js');

exports.listEmpleados = function listEmpleados( result) {
    var query = "select  * from `empleados`   ";
    sql.executeQuery(query, null , result);
};
