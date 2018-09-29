var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MOGODB_URI || 'mongodb://localhost:27017/TodoApp');
mongoose.connect(process.env.MOGODB_URI || 'mongodb://admin:welcome1@ds051585.mlab.com:51585/nodejsapidb');
//mongodb://admin:welcome1@ds051585.mlab.com:51585/nodejsapidb

module.exports = {mongoose};