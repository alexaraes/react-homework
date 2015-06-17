var React = require('react');


module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div>
					<p>{CommentModel.get('text')}</p>
					<div>{moment(CommentModel.get('createdAt')).calendar().toString()}</div><br/>
				</div>
			</div>
		);
	},
	commentSubmitted: function(e) {
		e.preventDefault();
		console.log(this.refs.commentText);
	}
});