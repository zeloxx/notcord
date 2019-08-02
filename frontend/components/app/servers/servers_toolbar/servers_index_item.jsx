import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class ServersIndexItem extends Component {
    render() {
        return (
            <li className="server-toolbar-icon">
                <NavLink to={`/channels/${this.props.server.id}`}>
                    <img
                        className="server-toolbar-icon__img"
                        // activeClassName="server-toolbar-icon__img--active"
                        src={this.props.server.icon_url}
                        alt="server icon"
                    />
                </NavLink>
            </li>
        )
    }
}
