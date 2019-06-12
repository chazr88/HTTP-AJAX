import React, { Component } from 'react';
import axios from 'axios';

export class EditFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id: this.props.id,
                name: this.props.name,
                age: this.props.age,
                email: this.props.email
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        //const item = items.find(thing => `${thing.id}` === props.match.params.id);
        console.log(this.props.friends)
        //const id = props.match.params.id
        this.fetchFriend(id);

    }
    
    fetchFriend = id => {
        axios
        .get(`http://localhost:5000/friends?id=${id}`)
        .then(response => {
        console.log(response)
        })
        .catch(error => {
        console.error(error);
        });
    };


    // componentDidMount() {
    //     const id = this.props.match.params.id
    //     //const item = items.find(thing => `${thing.id}` === props.match.params.id);

    //     //const id = props.match.params.id
    //     this.fetchFriend(id);

    // }
    
    // fetchFriend = id => {
    //     const selectedFriend = this.props.friends.filter(friend => friend.id === 1) 
    //     console.log(selectedFriend)
    //         this.setState({
    //             // id: this.selectedFriend.id,
    //             // name: this.selectedFriend.name,
    //             // age: this.selectedFriend.age,
    //             // email: this.selectedFriend.email
    //         })
    //     }


    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    clickHandler = e => {
        e.preventDefault();

        const { id, name, age, email } = this.state;

        axios.put('http://localhost:5000/friends', { id, name, age, email })
          .then((result) => {
            console.log(result);
            console.log(result.data);
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
                <button type="submit">Add Friend</button>
          </form>
        )
    }
}

export default EditFriend
