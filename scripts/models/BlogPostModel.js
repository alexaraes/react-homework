var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults: {
		title: '',
		body: '',
		category: '',
		createdAt: null,
		userId: null
	},
	 validate: function(attr) {
		if(!attr.title) {
			return 'Enter a post title.'
		} else if(!attr.body) {
			return 'Enter a post body.'
		}
		return false;
	}
});