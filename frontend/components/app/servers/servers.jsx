import React, { Component } from 'react'
import ServersToolbar from './servers_toolbar/servers_toolbar';
import ServerPanel from './server_panel/server_panel';

export default class Servers extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="servers">
                <ServersToolbar
                    servers={this.props.servers}
                    fetchCurrentUserServers={this.props.fetchCurrentUserServers}
                    closeModal={this.props.closeModal}
                    openModal={this.props.openModal}
                />

                <ServerPanel />
            </div>
        )
    }
}
