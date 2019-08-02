import React, { Component } from 'react'

export default class ServersIndex extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCurrentUserServers();
    }

    render() {

        return (
            <div>

            </div>
        )
    }
}
