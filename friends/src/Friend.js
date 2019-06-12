import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Friend extends Component {
    render() {
        return (
            <div>
                <Link to={`/edit/${this.props.friend.id}`}>
                <p>Name: {this.props.friend.name}</p>
                </Link>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
                <button>Delete</button>
            </div>
        )
    }
}

export default Friend
