var React = require('react');
var BlogModel = require('../models/BlogPostModel');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<form onSubmit={this.submitBlog}>
					<input type='text' ref='blogTitle' placeholder='Title goes here' /><br/>
					<textarea ref='blogText'></textarea><br/>
					<button type='submit'>Post</button>
				</form>
				<div ref='errors'></div>
			</div>        
		);
	},
	submitBlog: function(e) {
		e.preventDefault();
		var blogPost = new BlogModel({
			title: this.refs.blogTitle.getDOMNode().value,
			body: this.refs.blogText.getDOMNode().value,
			createdAt: new Date()
		});
		if(!blogPost.isValid()) {
			this.refs.errors.getDOMNode().innerHTML = blogPost.validationError;
		} else {
			this.props.newPost(blogPost);
		}
	}
})