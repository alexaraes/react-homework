var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults: {
		title: '',
		text: '',
		userId: null,
		creationDate: new Date(),
		_id: null
	}
});