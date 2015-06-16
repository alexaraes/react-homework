var $ = require('jquery');
var Backbone = require('backbone');
var Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		username: null,
		password: null,
		email: null,
		createdAt: null
	}
});