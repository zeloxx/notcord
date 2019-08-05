import React, { Component } from 'react'

export default class ServersAdd extends Component {
    render() {
        return (
            <div onClick={() => (this.props.openModal("addServer"))} className="server-add">
                <i className="fa fa-plus"></i>
            </div>
        )
    }
}
