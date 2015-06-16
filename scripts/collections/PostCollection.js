var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var CommentModel = require('../models/PostModel.js');

module.exports = Backbone.Collection.extend({
	model: PostModel
});