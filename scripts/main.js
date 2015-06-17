var React = require('react');
var BlogListComponent = require('./components/BlogListComponent');
var BlogFormComponent = require('./components/BlogFormComponent');
var CommentListComponent = require('./components/CommentListComponent');
var CommentFormComponent = require('./components/CommentFormComponent');
var LoginComponent = require('./components/LoginComponent');

var BlogPostCollection = require('./collections/BlogPostCollection');
var UserCollection = require('./collections/UserCollection');
var CommentCollection = require('./collections/CommentCollection');


var blogPosts = new BlogPostCollection([]);

function newPost(postModel) {
	console.log('newPost was run');
	blogPosts.add(postModel);
}

var commentPost = new CommentCollection([]);

function newComment(commentModel) {
	console.log('newComment was run');
	commentPost.add(CommentModel);
}

React.render(
	<div>
		<div>
			<BlogFormComponent newPost={newPost} />
			<BlogListComponent posts={blogPosts} number={5} />
		</div>
	</div>,
	document.getElementById('container')
)