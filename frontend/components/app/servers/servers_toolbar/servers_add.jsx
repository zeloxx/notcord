import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class ServersAdd extends Component {
    render() {
        return (
            <div onClick={() => (this.props.openModal({ name: "addServer" }))} className="server-add">
                <i className="fa fa-plus"></i>
            </div>
        )
    }
}
