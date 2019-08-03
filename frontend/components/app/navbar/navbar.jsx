import React, { Component } from 'react'
import ServerControlPanel from './server_control_panel';

export default class Navbar extends Component {

    constructor(props) {
        super(props)
        debugger;
    }

    render() {
        return (
            <div>
                <ServerControlPanel
                    serverId={this.props.match.params.serverId}
                    server={this.props.server}
                    leaveServer={this.props.leaveServer
                    } />
            </div>
        )
    }
}
