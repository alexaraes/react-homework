var React = require('react');
var _ = require('backbone/node_modules/underscore');
var moment = require('moment');

var CommentCollection = require('../collections/CommentCollection');
var CommentFormComponent = require('./CommentFormComponent');

var commentPosts = new CommentCollection([]);

module.exports = React.createClass({
	componentWillMount: function() {
		this.props.posts.on('add', this.postAdded);
	},
	getInitialState: function() {
		return {
			number: this.props.number
		};
	},
	render: function() {
		console.log('render was run', this.state.number);

		// Sort the collection (that was passed in in main.js) by the createdAt property.
		var sortedModels = this.props.posts.sortBy(function(postModel) {
			return -1*postModel.get('createdAt').getTime();
		});

		console.log(sortedModels);

		// Grabbing the top N posts from the sorted list.
		var topNModels = _.first(sortedModels, this.state.number);

		// Converting the top N posts from Backbone models to react components.
		// What we're left with is an array of react elements.
		var topNElements = topNModels.map(function(postModel) {
			return (
				<div key={postModel.cid}>
					<div>
						<h3>{postModel.get('title')}</h3>
						<p>{postModel.get('body')}</p>
						<div>{moment(postModel.get('createdAt')).calendar().toString()}</div><br/>
					</div>
					<div>
						<CommentFormComponent posts={commentPosts} />
					</div>
				</div>
			)
		});

		// Return the array of react elements wrapped in a div
		return (
			<div>
				{topNElements}
			</div>
		);
	},

	postAdded: function(postModel) {
		this.forceUpdate();
	},

	numberChanged: function(e) {
		console.log('number was changed');
		var newNumber = this.refs.number.getDOMNode().value;
		if(!newNumber) {
			newNumber = 0;
		}
		newNumber = parseInt(newNumber);
		this.setState({
			number: newNumber
		});
	}
});