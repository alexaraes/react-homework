var React = require('react');
var BlogListComponent = require('./components/BlogListComponent');
var BlogPostCollection = require('./collections/BlogPostCollection');
var BlogFormComponent = require('./components/BlogFormComponent');
var CounterComponent = require('./components/CounterComponent');

var blogPosts = new BlogPostCollection([
	{
		title: 'Breaking news! React is awesome :)',
		body: 'Lorem ipsum Id exercitation voluptate sunt officia aliquip labore sed ullamco in id culpa sit non aute deserunt velit laborum minim nulla dolore voluptate consectetur non proident sint sunt magna commodo occaecat anim eiusmod adipisicing incididunt velit aliqua dolore consequat.',
		userId: 1,
		category: 'react',
		createdAt: new Date()
	}
]);

var allCategories = ['react', 'javascript', 'html', 'css'];
function newPost(postModel) {
	console.log('newPost was run');
	blogPosts.add(postModel);
}

React.render(
	<div>
		<BlogFormComponent allCategories={allCategories} newPost={newPost} />
		<BlogListComponent posts={blogPosts} number={5} />
		<CounterComponent />
	</div>,
	document.getElementById('container')
)