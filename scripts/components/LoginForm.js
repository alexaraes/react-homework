var React = require('react');
var Validate = require('../node_modules/validator/validator.min.js');

module.exports = React.createClass({
	render: function() {
		return (
			<form onSubmit={this.loginSubmit}>
				<input ref="username" type="text" placeholder="Enter username." />
				<input ref="password" type="text" placeholder="Enter password."
				<button type="submit">Log In</button>
			</form>
		);
	},
	loginSubmit: function(e) {
		e.preventDefault();
        var username = this.refs.username.getDOMNode().value
        var password = this.refs.password.getDOMNode().value
         if (username.length == 0 ){
            alert('Please enter your email address.')
            return
        }
        if (password.length == 0 ){
            alert('Please enter your password.')
            return
        }
        if (!validator.isEmail(username)){
            alert('Please enter a valid email address.')
            return
        }
        if (username !== ('alexa.schreffler@gmail.com') && password !== ('1234')){
            alert('Invalid username or password.')
            return
        }
        console.log('Logged In!')
	}
});