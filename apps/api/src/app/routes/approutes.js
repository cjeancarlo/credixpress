'use strict';

module.exports = function(app) {

    var optionList = require('../controller/appController');

  // todoList Routes
  app.route('/listOptionByParent/:parentId')
    .get(optionList.getlistOption);
    /*.post(todoList.create_a_task);*/
   
   /*app.route('/listOptionByParent/:parentId')
    .get(todoList.read_parents_options)
    .put(todoList.update_parent_options)
    .delete(todoList.delete_a_task);*/
};