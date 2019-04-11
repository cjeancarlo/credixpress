
var listOptions  = require('../model/appModel');

exports.getlistOptionByCategory = function(req, res) {
  listOptions.listOptionByCategory(req.body.categoryId, function(err, result) {
      if (err){
        res.send(err);
      }
      res.json(result);
    });
};

exports.getlistOptionByParent = function(req, res) {
  listOptions.listOptionByParent(req.body.parentId, function(err, result) {
      if (err) {
          res.send(err);
        }
        res.send(result);
      });
};

  exports.getlistOptionById = function(req, res) {
    listOptions.listOptionById(req.body.Id, function(err, result) {
        if (err) {
          res.send(err);
        }
        res.send(result);
      });
    };
  

