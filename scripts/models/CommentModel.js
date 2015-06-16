var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults: {
		text: '',
		userId: null,
		creationDate: new Date()
	}
});