import React, { Component } from 'react'
import ServersIndexItem from './servers_index_item';

export default class ServersIndex extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCurrentUserServers();
    }

    render() {

        const servers = this.props.servers.map(server => <ServersIndexItem key={server.id} server={server} />)

        return (
            <ul>
                {servers}
            </ul>
        )
    }
}
