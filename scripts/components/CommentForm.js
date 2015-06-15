var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<form onSubmit={this.commentSubmitted}>
				<input ref="commentText" type="text" placeholder="Enter a comment..." />
				<button type="submit">Submit Comment</button>
			</form>
		);
	},
	commentSubmitted: function(e) {
		e.preventDefault();
		console.log(this.refs.commentText);
	}
});