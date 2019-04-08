'use strict';
var listOptions  = require('../model/appModel');


exports.getlistOption = function(req, res) {
    
  listOptions.listOptionByParent(req.params.parentId, function(err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  };

