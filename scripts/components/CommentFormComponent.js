var React = require('react');
var CommentModel = require('../models/CommentModel');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<form onSubmit={this.submitComment}>
					<textarea ref='commentText'></textarea><br/>
					<button type='submit'>Comment</button>
				</form>
				<div ref='errors'></div>
			</div>        
		);
	},
	submitComment: function(e) {
		e.preventDefault();
		var commentPost = new CommentModel({
			title: this.refs.blogTitle.getDOMNode().value,
			body: this.refs.blogText.getDOMNode().value,
			category: this.refs.blogCategory.getDOMNode().value,
			createdAt: new Date()
		});
		if(!blogPost.isValid()) {
			this.refs.errors.getDOMNode().innerHTML = blogPost.validationError;
		} else {
			this.props.newPost(blogPost);
		}
	}
})