import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Friend extends Component {



    clickHandler = e => {
        axios.delete(`http://localhost:5000/friends/${this.props.friend.id}`)
        window.location.reload()
    }

    render() {
        return (
            <div>
                <Link to={`/edit/${this.props.friend.id}`}>
                <p>Name: {this.props.friend.name}</p>
                </Link>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
                <button onClick={this.clickHandler}>Delete</button>
            </div>
        )
    }
}

export default Friend
