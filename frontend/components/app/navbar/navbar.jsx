import React, { Component } from 'react'
import ServerControlPanel from './server_control_panel';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <ServerControlPanel
                    server={this.props.server}
                    leaveServer={this.props.leaveServer
                    } />
            </div>
        )
    }
}
