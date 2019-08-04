import React, { Component } from 'react'
import NavbarServerControlPanel from './navbar_server_control_panel';

export default class Navbar extends Component {

    constructor(props) {
        super(props)
        debugger;
    }

    render() {
        return (
            // <div>
            //     <NavbarServerControlPanel
            //         serverId={this.props.match.params.serverId}
            //         server={this.props.server}
            //         leaveServer={this.props.leaveServer
            //         } />
            // </div>

            <div className="navbar">
                <div className="navbar-container">
                    <div className="server-control-panel">
                        <div className="server-control-panel-container">
                            <h1 className="server-control-panel__name">this.props.server.name</h1>
                            <i className="server-control-panel__logout" onClick={this.props.leaveServer(this.props.serverId)}>icon</i>
                        </div>
                    </div>

                    <div className="channel-control-panel">
                        <div className="channel-control-panel-container">
                            <div className="channel-control-panel-info">
                                <i className="channel-control-panel-info__hashtag">icon</i>
                                <h1 className="channel-control-panel-info__name">this.props.channel.name</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
