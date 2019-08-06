import React, { Component } from 'react'
import { withRouter } from "react-router";

class ServerLeaveModal extends Component {

    constructor(props) {
        super(props)
        this.handleLeaveServer = this.handleLeaveServer.bind(this);
        
    }

    serverId() {
        const splitPath = this.props.location.pathname.split('/');
        const serverIdIndex = splitPath.indexOf("channels") + 1;
        const serverId = splitPath[serverIdIndex];
        return serverId;
    }

    handleLeaveServer(e) {
        e.preventDefault();
        this.props.leaveServer(this.serverId()).then(() => this.props.closeModal());
        this.props.history.push('/channels/@me');
    }

    render() {
        const currentServer = this.props.state.entities.servers[this.serverId()];
        if (currentServer) {
            return (
                <div className="server-leave-modal">
                    <div className="server-leave-heading-body-container">
                        <h1 className="server-leave-modal__heading">Leave '{currentServer.name}'</h1>
                        <p className="server-leave-modal__body">Are you sure you want to leave {currentServer.name}? You won't be able to rejoin this server unless you are re-invited.</p>
                    </div>
                    <div className="server-leave-modal-leave-container">
                        <button onClick={this.handleLeaveServer} className="server-leave-modal__leave">Leave server</button>
                    </div>
                </div >
            )
        } else {
            return (
                <div>

                </div>
            )
        }

    }
}


export default withRouter(ServerLeaveModal)