
const React = require('react');
const Nav = require('./nav.jsx');

class Header extends React.Component {
	render() {
		return (<header>
		<h1>Title</h1>
		<Nav />
		</header>);
	}
}

export default Header;
