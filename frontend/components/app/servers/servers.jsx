import React, { Component } from 'react'
import ServersToolbar from './servers_toolbar/servers_toolbar';

export default class Servers extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ServersToolbar
                servers={this.props.servers}
                fetchCurrentUserServers={this.props.fetchCurrentUserServers}
                closeModal={this.props.closeModal}
                openModal={this.props.openModal}
            />
            
        )
    }
}
