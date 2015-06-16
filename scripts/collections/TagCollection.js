var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var CommentModel = require('../models/TagModel.js');

module.exports = Backbone.Collection.extend({
	model: TagModel
});