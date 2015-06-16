var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults: {
		title: '',
		text: '',
		userId: null,
		createdAt: null,
		_id: null
	}
});