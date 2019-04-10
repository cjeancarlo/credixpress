'use strict';

module.exports = function(app) {

var optionList = require('../controller/appController');

  //Routes
  app.route('/listOptionByParent/:parentId')
  .get(optionList.getlistOptionByParent );
  
  app.route('/listOptionById/:Id')
  .get(optionList.getlistOptionById);
};

 /*app.route('/listOptionByParent/:parentId')
    .get(todoList.read_parents_options)
    .put(todoList.update_parent_options)
    .delete(todoList.delete_a_task);*/