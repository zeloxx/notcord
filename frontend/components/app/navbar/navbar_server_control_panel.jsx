import React, { Component } from 'react'

export default class NavbarServerControlPanel extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {/* <h1>{this.props.server.name}</h1>
                <i class="fas fa-times"></i> */}
                <button onClick={ () => this.props.leaveServer(this.props.serverId)}>Leave Server</button>
            </div>
        )
    }
}
