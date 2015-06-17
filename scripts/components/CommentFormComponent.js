var React = require('react');
var BlogModel = require('../models/BlogPostModel');
var CommentModel = require('../models/CommentModel')

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<form onSubmit={this.submitComment}>
					<textarea ref='commentText'></textarea><br/>
					<button type='submit'>Leave a comment</button>
				</form>
				<div ref='errors'></div>
			</div>        
		);
	},
	submitComment: function(e) {
		e.preventDefault();
		var commentPost = new CommentModel({
			text: this.refs.commentText.getDOMNode().value,
			createdAt: new Date()
		});
	}
})