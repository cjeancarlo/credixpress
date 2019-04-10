
var listOptions  = require('../model/appModel');

exports.getlistOptionByCategory = function(req, res) {
  listOptions.listOptionByCategory(req.params.categoryId, function(err, result) {
      if (err){
        res.send(err);
      }
      res.json(result);
    });
};

exports.getlistOptionByParent = function(req, res) {
  listOptions.listOptionByParent(req.params.parentId, function(err, result) {
      if (err){
        res.send(err);
      }
      res.json(result);
    });
};

  exports.getlistOptionById = function(req, res) {
    listOptions.listOptionById(req.params.Id, function(err, result) {
        if (err) {
          res.send(err);
        }
        res.json(result);
      });
    };
  

