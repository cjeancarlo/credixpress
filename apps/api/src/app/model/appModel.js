'user strict';
var sql = require('../database/connect.js');
var listOption =  function() {
};

listOption.listOptionByParent = function listOptionByParent(parentId, result) {
        sql.query("select id, parentId, description from `list_options`  where parentId = ? ", parentId, function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

listOption.listOptionById = function listOptionById(Id, result) {
    sql.query("select id, parentId, description from `list_options` where id = ?  ", Id, function (err, res) {             
    if(err) {
        console.log("error: ", err, Id);
        result(err, null);
    }
    else{
        result(null, res);
  
    }
    });   
};

module.exports= listOption;