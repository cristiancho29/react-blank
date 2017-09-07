
const React = require('react');
const Header = require('./header.jsx');
const Footer = require('./footer.jsx');

class Main extends React.Component {
	render() {
		return (<main>
		<Header />
		<Footer />
		</main>);
	}
}

export default Main;

