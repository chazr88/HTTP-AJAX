import React, { Component } from 'react';
import axios from 'axios';


class EditFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
                friend: '',
                id: '',
                name: '',
                age: '',
                email: ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id

        const friend = this.props.friends.find(
            friend => `${friend.id}` === id
        );
        
        this.setState({
            name: friend.name,
            age: friend.age,
            email: friend.email,
            id: friend.id
        })

    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    clickHandler = e => {
        e.preventDefault();

        const { id, name, age, email } = this.state;

        axios.put(`http://localhost:5000/friends/${id}`, { id, name, age, email })
          .then((result) => {
            this.props.history.push("/");
          });

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
                <button type="submit">Edit Friend</button>
          </form>
        )
    }
}

export default EditFriend
