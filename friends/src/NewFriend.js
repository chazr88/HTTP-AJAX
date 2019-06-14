import React, { Component } from 'react'
import axios from 'axios';
import uuidv4 from 'uuidv4'

export class NewFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id: uuidv4(),
                name: '',
                age: '',
                email: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    clickHandler = e => {

        const { id, name, age, email } = this.state;

        axios.post('http://localhost:5000/friends', { id, name, age, email })

    }

    render() {
        return (
            <form onSubmit={this.clickHandler}>
                <input
                    type="text"
                    value={this.state.name}
                    placeholder="name"
                    name="name"
                    onChange={this.changeHandler}
                />
                <input
                    type="text"
                    value={this.state.age}
                    placeholder="age"
                    name="age"
                    onChange={this.changeHandler}
                />
                <input
                    type="text"
                    value={this.state.email}
                    placeholder="email"
                    name="email"
                    onChange={this.changeHandler}
                />
                <button type="submit">Add Friend</button>
          </form>
        )
    }
}

export default NewFriend
