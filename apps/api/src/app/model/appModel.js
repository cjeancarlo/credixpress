'user strict';
var sql = require('../database/connect.js');
var listOption =  function() {
};

listOption.listOptionByParent = function listOptionByParent(parentId, result) {
        sql.query("Select * from `list_options`  where parentId = ? ", parentId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
      
        }
    });   
};

module.exports= listOption;