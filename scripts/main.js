var React = require('react');
var BlogPost = require('./components/PostForm.js');
var PostList = require('./components/PostListForm.js')
var CommentForm = require('./components/CommentForm.js');
var CommentList = require('./components/CommentListForm.js');
var LoginForm = require('./components/LoginForm.js');

React.render(
	<div>
		<LoginForm />
		<PostForm  />
		<PostList />
		<CommentForm />
		<CommentList />
	</div>,
	document.getElementById('container')
);