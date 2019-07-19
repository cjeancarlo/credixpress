'use strict';

module.exports = function(app) {

var optionList = require('../controller/appController');

app.route('/listAllOptions/')  
  .post(optionList.getlistAllOptions);

  app.route('/listOptionByParent/')  
  .post(optionList.getlistOptionByParent);

  app.route('/listOptionById/')
  .post(optionList.getlistOptionById);

  app.route('/listOptionByCategory/')
  .post(optionList.getlistOptionByCategory );

  /**rutas Empleados */
  app.route('/listEmpleados/')
  .post(optionList.getlistEmpleados);

  app.route('/EditOrCreateEmpleado/')
  .post(optionList.EditOrCreateEmpleado);

  app.route('/deleteEmpleado/')
  .post(optionList.deleteTelefono);

  /**rutas telefonos */
  app.route('/listTelefonos/')
  .post(optionList.getlistTelefonos);

  app.route('/EditOrCreateTelefono/')
  .post(optionList.EditOrCreateTelefono);

  app.route('/deleteTelefono/')
  .post(optionList.deleteTelefono);

};

