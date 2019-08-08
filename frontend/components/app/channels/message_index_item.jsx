import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class MessageIndexItem extends Component {

    render() {
        
        return (
        <li className="chat-conversation-message">
            {/* <div className="chat-conversation-message__avatar">{this.props.user.username[0]}</div> */}
                <div className="message-container">
                    <div className="username-timestamp-container">
                        <div className="chat-conversation-message__username">{this.props.user.username}</div>
                        <div className="chat-conversation-message__timestamp">{this.props.message.created_at}</div>
                    </div>
                    <div className="chat-conversation-message__body">{this.props.message.body}</div>
                </div>
            </li>
        )
    }
}