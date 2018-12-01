// App Dependencies
var server = require('./libs/server');
var config = require('./config');

var app = {};

app.initialize = function(){
	server.init(config);
}

app.initialize();
// require('./libs/stripe-api').createCharge(2232, 'usd', 'visa', 'test request', (err, data) =>{
// 	console.log(err, data)
// })

module.exports = app;