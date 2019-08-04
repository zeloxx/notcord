import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../../../actions/session_actions';

export class ServerPanel extends Component {

    render() {
        return (
            <div className="server-panel">
                <nav className="server-panel-nav">
                    <h1 className="server-panel-nav__name">server_name</h1>
                    <i className="server-panel-nav__leave-server-btn">x</i>
                </nav>

                <section className="server-panel-channels">
                    <div className="server-panel-text-channels">
                        <div className="text-channels-options">
                            <h1 className="text-channels-options__title">text channels</h1>
                            <i className="text-channels-options__create-channel-btn">+</i>
                        </div>
                        <div className="server-panel-text-channel">
                            <h1 className="server-panel-text-channel__name"># channel_name</h1>
                            <div className="text-channel-options">
                                <i className="text-channel-options__invite-btn">+</i>
                                <i className="text-channel-options__delete-channel-btn">-</i>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="server-panel-user-controls">
                    <h1 className="server-panel-user-controls__username">Username</h1>
                    <button onClick={this.props.logout} className="server-panel-user-controls__logout-btn">Log Out</button>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerPanel)
