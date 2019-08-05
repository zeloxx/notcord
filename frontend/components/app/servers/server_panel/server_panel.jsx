import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { openModal } from '../../../../actions/ui_actions';

export class ServerPanel extends Component {

    componentDidMount() {
        // this.props.fetchServerChannels()
    }

    channelList() {
        return this.props.channels.map(channel => {
            return (
                <NavLink to={`/channels/${this.props.server.id}`}>
                    <li className="server-panel-text-channel">
                        <h1 className="server-panel-text-channel__name"># {channel.name}</h1>
                        <div className="text-channel-options">
                            <i onClick={() => this.props.openModal("channelDelete")} className="text-channel-options__delete-channel-btn">-</i>
                        </div>
                    </li>
                </NavLink >
            )
        })
    }

    render() {
        return (
            <div className="server-panel">
                <nav className="server-panel-nav">
                    <h1 className="server-panel-nav__name">server_name</h1>
                    <div className="nav-options">
                        <i onClick={() => this.props.openModal("serverInvite")} className="nav-options__invite-btn">+</i>
                        <i onClick={() => this.props.openModal("serverLeave")} className="nav-options__leave-server-btn">x</i>
                    </div>
                </nav>

                <section className="server-panel-channels">
                    <div className="server-panel-text-channels">
                        <div className="text-channels-options">
                            <h1 className="text-channels-options__title">text channels</h1>
                            <i className="text-channels-options__create-channel-btn">+</i>
                        </div>
                        <ul>
                            <li className="server-panel-text-channel">
                                <h1 className="server-panel-text-channel__name"># channel_name</h1>
                                <div className="text-channel-options">
                                    <i className="text-channel-options__delete-channel-btn">x</i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <footer className="server-panel-user-controls">
                    <h1 className="server-panel-user-controls__username">Username</h1>
                    <button onClick={() => this.props.openModal("sessionLogout")} className="server-panel-user-controls__logout-btn">Log Out</button>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerPanel)
