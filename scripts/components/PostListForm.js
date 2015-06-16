var React = require('react');


module.exports = React.createClass({
	render: function() {
		return (
			<div>
				
			</div>
		);
	},
	commentSubmitted: function(e) {
		e.preventDefault();
		console.log(this.refs.commentText);
	}
});