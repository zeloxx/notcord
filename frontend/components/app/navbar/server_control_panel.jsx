import React, { Component } from 'react'

export default class ServerControlPanel extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.server.name}</h1>
                <i class="fas fa-times"></i>
            </div>
        )
    }
}
