import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class ChannelUserIndexItem extends Component {

    render() {
        return (
            <li className="channel-users-user">
                <h1 className="channel-users-user__username">{this.props.user.username}</h1>
            </li>
        )
    }
}