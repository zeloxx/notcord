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
            <div>
                <ServersHome />
                <ServersIndex
                    servers={this.props.servers}
                    fetchCurrentUserServers={this.props.fetchCurrentUserServers}
                />
                <ServersAdd />
            </div>
        )
    }
}
