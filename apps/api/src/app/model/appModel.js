'user strict';
var sql = require('../database/connect.js');
var listOption =  function() { };

listOption.listOptionByParent = function listOptionByParent(parentId, result) {
    var query = "select id, parentId, description from `list_options`  where parentId = ? "    
    executeQuery(query, parentId, result);
};

listOption.listOptionByCategory = function listOptionById(categoryId, result) {
    var query = "select id, parentId, description from `list_options` where categoryId = ?  ";
    executeQuery(query, categoryId, result);
};

listOption.listOptionById = function listOptionById(Id, result) {
    var query = "select id, parentId, description from `list_options` where id = ?  ";
    executeQuery(query, Id, result);
};

function executeQuery(query, param, result){
sql.query(query, param, function (err, res) {
    if(err) {
        console.log("error: ", err, param);
        result(err, null);
    }
    else{
        result(null, res);
    }
    });   
}
module.exports= listOption;