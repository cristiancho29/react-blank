
const React = require('react');
import * as firebase from 'firebase';

const config = {
apiKey: "AIzaSyB3IFpxozA1c3sj8jE6cpg4Wpu9P11TejI",
authDomain: "csbw-b5275.firebaseapp.com",
databaseURL: "https://csbw-b5275.firebaseio.com",
storageBucket: "csbw-b5275.appspot.com",
messagingSenderId: "123311217266"
};
firebase.initializeApp(config);



class Content extends React.Component {
    
    constructor () {
        super();
        this.state = {  name: '',
                        mail: '',
                        message: '',
                        messages: []
                     }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    
    handleSubmit(e) {
      e.preventDefault();
      const messagesRef = firebase.database().ref().child('messages');
      const message = {
        name: this.state.name,
        mail: this.state.mail,
        message: this.state.message
      }
      
      messagesRef.push(message);
      this.setState({
        name: '',
        mail: '',
        message: ''
      });
    }
    removeItem(messageId) {
      const messagesRef = firebase.database().ref().child('messages').child(messageId);
      messagesRef.remove();
    }
    componentDidMount() {
        const messagesRef = firebase.database().ref().child('messages');
          messagesRef.on('value', (snapshot) => {
            let messages = snapshot.val();
            let newState = [];
            for (let message in messages) {
              newState.push({
                id: message,
                name: messages[message].name,
                mail: messages[message].mail,
                message: messages[message].message
              });
            }
            this.setState({
              messages: newState
            });
          });
    }
    
	render() {
		return (<section>
		<h1>Messages</h1>
		    <h2>Send Message</h2>
        		<form onSubmit={this.handleSubmit}>
                    Name    <input      value={this.state.name}     onChange={this.handleChange} name="name"    type="text" placeholder="Name" /><br />
                    mail   <input      value={this.state.mail}    onChange={this.handleChange} name="mail"    type="email" placeholder="mail@domain.com"/><br />
                    Message <textarea   value={this.state.message}  onChange={this.handleChange} name="message"    placeholder="Messge"></textarea><br />
                    <button>Send Message</button>
              </form>
            <h2>Sent Messages</h2>
        		<table>
            		<thead>
            		    <tr>
            		        <th>Name</th>
            		        <th>mail</th>
            		        <th>Message</th>
            		        <th>Options</th>
            		    </tr>
            		</thead>
            		
            		<tbody>
            		    {this.state.messages.map((message) => {
                            return (
                    		    <tr key={message.id}>
                                        <td>{message.name}</td>
                        		        <td>{message.mail}</td>
                        		        <td>{message.message}</td>
                        		        <td><button onClick={() => this.removeItem(message.id)}>Remove</button></td>
                    		    </tr>
                            )
                          })}
            		       
            		</tbody> 
    		    </table>
		
		</section>);
	}
}

export default Content;

