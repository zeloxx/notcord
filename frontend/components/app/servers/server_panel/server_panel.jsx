import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter, Redirect } from 'react-router-dom';
import { openModal } from '../../../../actions/ui_actions';
import { fetchServerChannels } from '../../../../actions/channel_actions';
import ChannelIndexItem from './channel_index_item';


class ServerPanel extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // theres gotta be a better way
        this.props.fetchServerChannels(this.props.match.params.serverId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
            this.props.fetchServerChannels(this.props.match.params.serverId)
        }
    }


    channelList() {
        return Object.values(this.props.channels).map(channel => <ChannelIndexItem key={channel.id} openModal={this.props.openModal} channel={channel} />)
    }

    render() {
        const server = this.props.server;
        if (!server) {
            return <Redirect to="/channels/@me" />
        }
        return (
            <div className="server-panel">
                <nav className="server-panel-nav">
                    <h1 className="server-panel-nav__name">{server.name}</h1>
                    <div className="nav-options">
                        <i onClick={() => this.props.openModal({ name: "serverInvite" })} className="nav-options__invite-btn">+</i>
                        <i onClick={() => this.props.openModal({ name: "serverLeave" })} className="nav-options__leave-server-btn">x</i>
                    </div>
                </nav>
                <section className="server-panel-channels">
                    <div className="server-panel-text-channels">
                        <div className="text-channels-options">
                            <h1 className="text-channels-options__title">text channels</h1>
                            <i onClick={() => this.props.openModal({ name: "channelCreate" })} className="text-channels-options__create-channel-btn">+</i>
                        </div>
                        <ul>
                            {this.channelList()}
                        </ul>
                    </div>
                </section>

                <footer className="server-panel-user-controls">
                    <h1 className="server-panel-user-controls__username">{this.props.user.username}</h1>
                    <button onClick={() => this.props.openModal({ name: "sessionLogout" })} className="server-panel-user-controls__logout-btn">Log Out</button>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        server: state.entities.servers[ownProps.match.params.serverId],
        user: state.entities.users[state.session.id],
        channels: state.entities.channels,
    }
};

const mapDispatchToProps = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    fetchServerChannels: (server_id) => dispatch(fetchServerChannels(server_id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerPanel));
