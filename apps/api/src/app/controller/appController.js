
var listOptions  = require('../model/listOptions');

exports.getlistAllOptions = function(req, res) {
  listOptions.listAllOptions(null,  function(err, result) {
      if (err){
        res.send(err);
      }
      res.send(result);
    });
};


exports.getlistOptionByCategory = function(req, res) {
  listOptions.listOptionByCategory(req.body.categoryId, function(err, result) {
      if (err){
        res.send(err);
      }
      res.send(result);
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

    /** empleados */
    var listEmpleados  = require('../model/Empleados');
    
    exports.getlistEmpleados = function(req, res) {
      listEmpleados.listEmpleados( function(err, result) {
          if (err) {
            res.send(err);
          }
          res.send(result);
        });
      };

      exports.EditOrCreateEmpleado = function(req, res) {
        listEmpleados.EditOrCreateEmpleado(req.body, function(err, result) {
            if (err) {
              res.send(err);
            }
            res.send(result);
          });
        };
    