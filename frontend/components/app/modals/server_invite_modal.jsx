import React, { Component } from 'react'
import { withRouter } from "react-router";

class ServerInviteModal extends Component {

    serverId() {
        const splitPath = this.props.location.pathname.split('/');
        const serverIdIndex = splitPath.indexOf("channels") + 1;
        const serverId = splitPath[serverIdIndex];
        return serverId;
    }

    render() {
        const currentServer = this.props.state.entities.servers[this.serverId()];
        return (
            <div className="server-invite-modal">
                <h1 className="server-invite-heading">Invite friends to {currentServer.name}</h1>
                <input
                    type="text"
                    value={currentServer.invite_code}
                    readOnly
                    className="server-invite-input"
                />
            </div>
        )
    }
}

export default withRouter(ServerInviteModal);