var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://martin:123@ds151355.mlab.com:51355/todo-app');
mongoose.connect('mongodb://localhost:27017/TodoApp');
console.log(mongoose);
module.exports = {mongoose};
