import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Servers from './servers/servers_container';
import Modals from './modals/modals_container';

class AppRoot extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.logout}>logout</button>
                <Modals />
                <Servers />
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