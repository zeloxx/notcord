import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { openModal } from '../../../../actions/ui_actions';

class ServerPanelHome extends Component {

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
            // this.props.requestSingleserver(this.props.match.params.serverId);
            console.log("here");
        }
    }

    render() {
        return (
            <div className="server-panel">
                <nav className="server-panel-nav">
                    <h1 className="server-panel-nav__name">Home</h1>
                </nav>

                <section className="server-panel-channels">
                    <div className="server-panel-text-channels">
                        <div className="text-channels-options">
                            <h1 className="text-channels-options__title">Direct Messages</h1>
                        </div>
                        <ul>
                            <li className="server-panel-text-channel">
                                <h1 className="server-panel-text-channel__name">user</h1>
                            </li>
                        </ul>
                    </div>
                </section>

                <footer className="server-panel-user-controls">
                    <h1 className="server-panel-user-controls__username">{this.props.user.username}</h1>
                    <button onClick={() => this.props.openModal("sessionLogout")} className="server-panel-user-controls__logout-btn">Log Out</button>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerPanelHome)