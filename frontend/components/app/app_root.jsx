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
                <Channels />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRoot));