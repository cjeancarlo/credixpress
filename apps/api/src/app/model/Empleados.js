var sql = require('../database/connect.js');

exports.listEmpleados = function listEmpleados( result) {
    var query = "select  * from `empleados`   ";
    sql.executeQuery(query, null , result);
};

function getDml(action, empleado ) {
    switch (action  ) {
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
                    return  `UPDATE empleados SET
                    codigo=${empleado.codigo},
                    nacimientoId=${empleado.nacimientoId},
                    tipodocumentoId=${empleado.tipodocumentoId},
                    documento=${empleado.documento},
                    nombre="${empleado.nombre}", 
                    apellido="${empleado.apellido}",
                    email="${empleado.email}"
                    where id = ${empleado.id}`;
        default:
        return "";
    }
}


exports.EditOrCreateEmpleado = function EditOrCreateEmpleado(empleado, result) {
    var query ="";
    
    if (empleado.id) {
        query =getDml("UPDATE", empleado );
} else {
    query = getDml("INSERT", empleado );
}
    query = query.replace(/(\r\n|\n|\r)/gm,"");
    sql.executeQuery(query, null , result);
};
