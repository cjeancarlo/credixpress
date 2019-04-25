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


  app.route('/listEmpleados/')
  .post(optionList.getlistEmpleados);

  app.route('/EditOrCreateEmpleado/')
  .post(optionList.EditOrCreateEmpleado);

};

