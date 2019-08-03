import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Servers from './servers/servers_container';
import Modals from './modals/modals_container';
import Navbar from './navbar/navbar_container';
import { Route } from 'react-router-dom';

class AppRoot extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.logout}>logout</button>
                <Modals />
                <Servers />
                <Route exact path="/channels/:serverId" component={Navbar} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRoot);