
const React = require('react');

class Content extends React.Component {
    
    constructor () {
    super()
        this.state = {  name: '',
                        email: '',
                        message: ''
                     }
    }
    
	render() {
		return (<section>
		<h1>Messages</h1>
		    <h2>Send Message</h2>
        		<form>
                    Name <input type="text" /><br />
                    Email <input type="email" /><br />
                    Message <textarea></textarea><br />
                    <button>Send Message</button>
              </form>
            <h2>Sent Messages</h2>
        		<table>
        		    <tr>
        		        <th>Name</th>
        		        <th>Email</th>
        		        <th>Message</th>
        		    </tr>
        		    <tr>
        		        <td>{this.state.name}</td>
        		        <td>{this.state.email}</td>
        		        <td>{this.state.message}</td>
        		    </tr>
    		    </table>
		
		</section>);
	}
}

export default Content;

