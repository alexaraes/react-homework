var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var PostModel = require('../models/BlogPostModel.js');

module.exports = Backbone.Collection.extend({
	model: PostModel
});