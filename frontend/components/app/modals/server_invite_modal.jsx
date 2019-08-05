import React, { Component } from 'react'
import { withRouter } from "react-router";

class ServerInviteModal extends Component {
    render() {
        return (
            <div>
                <h1>Invite friends to **server_name**</h1>
                <input
                    type="text"
                    spellcheck="false"
                    value="**invite_code**"
                />
            </div>
        )
    }
}

export default withRouter(ServerInviteModal);