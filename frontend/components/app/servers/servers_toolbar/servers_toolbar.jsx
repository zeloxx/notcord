import React, { Component } from 'react'
import ServersHome from './servers_home';
import ServersIndex from './servers_index';
import ServersAdd from './servers_add';

export default class ServersToolbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="servers-toolbar">
                <div className="servers-toolbar-container">
                    <ServersHome />
                    <ServersIndex
                        servers={this.props.servers}
                        fetchCurrentUserServers={this.props.fetchCurrentUserServers}
                    />
                    <ServersAdd
                        closeModal={this.props.closeModal}
                        openModal={this.props.openModal}
                    />
                </div>
            </div>
        )
    }
}
