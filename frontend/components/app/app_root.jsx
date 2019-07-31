import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'

import React, { Component } from 'react'

class AppRoot extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.logout}>logout</button>
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