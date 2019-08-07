import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Servers from './servers/servers_container';
import Channels from './channels/channels'
import Modals from './modals/modals_container';
import { Route, withRouter } from 'react-router-dom';

class AppRoot extends Component {



    render() {

        return (
            <div id="app-root">
                <Modals />
                <Servers />
                <Route
                    exact path={"/channels/:serverId/:channelId"}
                    component={Channels}
                />

            </div>
        )
    }
}

export default withRouter(AppRoot);