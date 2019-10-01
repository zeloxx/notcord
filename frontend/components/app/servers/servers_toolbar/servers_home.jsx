import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ServersHome extends Component {
  render() {
    return (
      <div className="server-toolbar-icon">
        <NavLink
          className="server-toolbar-icon__home"
          activeClassName="server-toolbar-icon__home--active"
          to={"/channels/@me"}
        >
          <div className="logo"></div>
        </NavLink>
      </div>
    );
  }
}
