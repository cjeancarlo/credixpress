var sql = require('../database/connect.js');

exports.listTelefonos = function listTelefonos(param, result) {
    sql.executeQuery(getDml("SELECT", param), null, result);
};

exports.deleteTelefono = function deleteTelefono(param, result) {
    sql.executeQuery(getDml("DELETE", param), null, result);
};


function getDml(action, telefono = null) {

    console.log(telefono.parentType);
    switch (action) {
        case "INSERT":
            return ` INSERT INTO telefonos 
                    (parentId, parentType, operadorId, codigoArea, nroTelefono) VALUES (
                    ${telefono.parentId},
                    ${telefono.parentType},
                    ${telefono.operadorId},
                    ${telefono.codigoArea},
                    "${telefono.nroTelefono}") `;
        case "UPDATE":
            return `UPDATE telefonos SET
                    operadorId=${telefono.operadorId},
                    codigoArea=${telefono.codigoArea},
                    nroTelefono="${telefono.nroTelefono}"
                    where id = ?  `;
        case "DELETE":
            return `DELETE from telefonos where  id = ${telefono.id}`;
        case "SELECT":
            return `select * from telefonos where  parentType = ${telefono.parentType}`;
        default:
            return "";
    }
}

exports.EditOrCreateTelefono = function EditOrCreateTelefono(telefono, result) {
    var query = "";
    if (telefono.id) {
        query = getDml("UPDATE", telefono);
    } else {
        query = getDml("INSERT", telefono);
    }
    query = query.replace(/(\r\n|\n|\r)/gm, "");
    sql.executeQuery(query, telefono.id, result, true, `${getDml("SELECT")} WHERE id = ? `);
};
