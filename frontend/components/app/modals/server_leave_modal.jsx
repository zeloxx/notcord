import React, { Component } from 'react'

export default class ServerLeaveModal extends Component {
    render() {
        return (
            <div classnName="server-leave-modal">
                <div className="server-leave-heading-body-container">
                    <h1 classnName="server-leave-modal__heading">LEAVE '**SERVER_NAME**'</h1>
                    <p classnName="server-leave-modal__body">Are you sure you want to leave **server_name**? You won't be able to rejoin this server unless you are re-invited.</p>
                </div>
                <div className="server-leave-modal-leave-container">
                    <button className="server-leave-modal__leave">Leave server</button>
                </div>
            </div >
        )
    }
}

// ***onClick(() => this.props.serverLeave(id))