var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<form onSubmit={this.postSubmit}>
				<input ref="postText" type="text" placeholder="Write your post!" />
				<button type="submit">Submit</button>
			</form>
		);
	},
	postSubmit: function(e) {
		e.preventDefault();
		var post = this.refs.postText.getDOMNode().value;
	}
});