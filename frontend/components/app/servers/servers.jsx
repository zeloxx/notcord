import React, { Component } from 'react'
import ServersToolbar from './servers_toolbar/servers_toolbar';
import ServerPanel from './server_panel/server_panel';
import ServerPanelHome from './server_panel_home/server_panel_home';
import { Route, Switch } from 'react-router-dom';

export default class Servers extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div className="servers">
                <ServersToolbar
                    servers={this.props.servers}
                    fetchCurrentUserServers={this.props.fetchCurrentUserServers}
                    closeModal={this.props.closeModal}
                    openModal={this.props.openModal}
                />

                <Switch>
                    <Route
                        exact path="/channels/@me"
                        render={(props) => <ServerPanelHome {...props} />}
                    />
                    <Route
                        exact path={"/channels"}
                        render={(props) => <ServerPanel {...props} />}
                    />

                    <Route
                        exact path="/channels/:serverId"
                        render={(props) => <ServerPanel {...props} />}
                        // component={ServerPanel}
                    />

                    <Route
                        exact path={"/channels/:serverId/:channelId"}
                        render={(props) => <ServerPanel {...props} />}
                    />
                </Switch>

            </div>
        )
    }
}
