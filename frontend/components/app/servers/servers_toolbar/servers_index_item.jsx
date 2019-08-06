import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class ServersIndexItem extends Component {
    render() {
        return (
            <li>
                <NavLink
                    to={`/channels/${this.props.server.id}`}
                    className="server-toolbar-icon server-toolbar-icon__link"
                    activeClassName="server-toolbar-icon__link--active"
                >
                    <div>{this.props.server.name[0]}</div>
                </NavLink>
            </li>
        )
    }
}
