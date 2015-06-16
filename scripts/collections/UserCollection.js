var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var CommentModel = require('../models/UserModel.js');

module.exports = Backbone.Collection.extend({
	model: UserModel
});