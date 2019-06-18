var sql = require('../database/connect.js');

exports.listEmpleados = function listEmpleados(result) {
    sql.executeQuery(getDml("SELECT"), null, result);
};

exports.deleteEmpleados = function deleteEmpleados(param, result) {
    sql.executeQuery(getDml("DELETE", param), null, result);
};

function getDml(action, empleado = null) {
    switch (action) {
        case "INSERT":
            return ` INSERT INTO empleados 
                    (codigo, nacimientoId, tipodocumentoId, documento, nombre, apellido, email) VALUES (
                    ${empleado.codigo},
                    ${empleado.nacimientoId},
                    ${empleado.tipodocumentoId},
                    ${empleado.documento},
                    "${empleado.nombre}", 
                    "${empleado.apellido}",
                    "${empleado.email}") `;
        case "UPDATE":
            return `UPDATE empleados SET
                    codigo=${empleado.codigo},
                    nacimientoId=${empleado.nacimientoId},
                    tipodocumentoId=${empleado.tipodocumentoId},
                    documento=${empleado.documento},
                    nombre="${empleado.nombre}", 
                    apellido="${empleado.apellido}",
                    email="${empleado.email}"
                    where id = ?  `;
        case "DELETE":
            return `DELETE from telefonos where  id = ${empleado.id}`;
        case "SELECT":
            return `SELECT * from empleados`;
        default:
            return "";
    }
}

exports.EditOrCreateEmpleado = function EditOrCreateEmpleado(empleado, result) {
    var query = "";
    if (empleado.id) {
        query = getDml("UPDATE", empleado);
    } else {
        query = getDml("INSERT", empleado);
    }
    query = query.replace(/(\r\n|\n|\r)/gm, "");
    sql.executeQuery(query, empleado.id, result, true, `${getDml("SELECT")} WHERE id = ? `);
};
