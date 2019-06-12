import React from 'react';
import './App.css';
import FriendsList from './FriendsList';
import EditFriend from './EditFriend';

import axios from 'axios';
import { Route} from 'react-router-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			friends: []
		}
	}

	componentDidMount() {
		axios
		.get("http://localhost:5000/friends")
		.then(response => this.setState({ friends: response.data }))
		.catch(err => {
		  console.log(err);
		  this.setState({ errorMessage: "error getting item list" });
		});
	}


	render() {
		return (
			<div className="App">
				<Route
					path="/"
					render={() => <FriendsList friends={this.state.friends} />}
					exact
				/>
				<Route
				path="/edit/:id"
				render={props => <EditFriend {...props} friends={this.state.friends} />}
				/>
			</div>
		);
	}

}

export default App;
