
var listOptions = require('../model/listOptions');

function send(err, result, res) {
  if (err) {
    res.send(err);
  }
  res.send(result);
}

exports.getlistAllOptions = function (req, res) {
  listOptions.listAllOptions(null, function (err, result) {
    send(err, result, res);
  });
};

exports.getlistOptionByCategory = function (req, res) {
  listOptions.listOptionByCategory(req.body.categoryId, function (err, result) {
    send(err, result, res);
  });
};

exports.getlistOptionByParent = function (req, res) {
  listOptions.listOptionByParent(req.body.parentId, function (err, result) {
    send(err, result, res);
  });
};

exports.getlistOptionById = function (req, res) {
  listOptions.listOptionById(req.body.Id, function (err, result) {
    send(err, result, res);
  });
};

/** empleados */
var listEmpleados = require('../model/Empleados');

exports.getlistEmpleados = function (req, res) {
  listEmpleados.listEmpleados(function (err, result) {
    send(err, result, res);
  });
};

exports.EditOrCreateEmpleado = function (req, res) {
  listEmpleados.EditOrCreateEmpleado(req.body, function (err, result) {
    send(err, result, res);
  });
};

/** TELEFONOS */
var listTelefonos = require('../model/Telefonos');

exports.getlistTelefonos = function (req, res) {
  listTelefonos.listTelefonos(req.body, function (err, result) {
    send(err, result, res);
  });
};

exports.EditOrCreateTelefono = function (req, res) {
  listTelefonos.EditOrCreateTelefono(req.body, function (err, result) {
    send(err, result, res);
  });
};

exports.deleteTelefono = function (req, res) {
  listTelefonos.deleteTelefono(req.body, function (err, result) {
    send(err, result, res);
  });
};