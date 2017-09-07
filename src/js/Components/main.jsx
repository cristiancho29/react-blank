
const React = require('react');
const Header = require('./header.jsx');
const Content = require('./content.jsx');
const Footer = require('./footer.jsx');

class Main extends React.Component {
	render() {
		return (<main>
		<Header />
		<Content />
		<Footer />
		</main>);
	}
}

export default Main;

