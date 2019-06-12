import React, { Component } from 'react';
import Friend from './Friend';
import NewFriend from './NewFriend'

export class FriendsList extends Component {
    render() {
        return (
            <div>
                <NewFriend addFriend={this.props.addFriend}/>
                {this.props.friends.map( friend => 
                <Friend friend={friend}/>
                )}
            </div>
        )
    }
}

export default FriendsList
