import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeMessageErrors, messageCreate, fetchMessages } from '../../../actions/message_actions';
import { fetchUsers } from '../../../actions/user_actions';
import MessageIndexItem from './message_index_item';
import ChannelUserIndexItem from './channel_user_item';

export class Channels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.removeMessageErrors();
        this.props.fetchMessages({ channel_id: this.props.match.params.channelId });
        this.props.fetchUsers({ channel_id: this.props.match.params.channelId });
    }

    componentDidUpdate(prevProps) {
        debugger;
        if (prevProps.match.params.channelId !== this.props.match.params.channelId) {
            this.props.fetchMessages({ channel_id: this.props.match.params.channelId })
            this.props.fetchUsers({ channel_id: this.props.match.params.channelId });
        }
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.messageCreate({ body: this.state.message, channel_id: this.props.channel.id, author_id: this.props.currentUser.id })
        this.setState({ message: "" })
        this.props.removeMessageErrors();
    }

    messageList() {
        if (this.props.messages) {
            return Object.values(this.props.messages).map(message => <MessageIndexItem key={message.id} message={message} user={this.props.users[message.author_id]} />)
        }
    }

    channelUserList() {
        if (this.props.users) {
            return Object.values(this.props.users).map(user => <ChannelUserIndexItem key={user.id} user={user} />)
        }
    }

    render() {
        if (this.props.channel) {
            return (
                <div className="channels-panel">

                    <nav className="channels-panel-nav">
                        <h1 className="channels-panel-nav__channel-name">{this.props.channel.name}</h1>
                    </nav>

                    <div className="chat-channel-users-container">
                        <section className="channels-panel-chat">
                            <ul className="chat-conversation">
                                {this.messageList()}
                            </ul>
                            <form onSubmit={this.handleSubmit} className="message-form">
                                <div className="message-form__input-container">
                                    < input
                                        type="text"
                                        value={this.state.message}
                                        placeholder={`Send a message to ${this.props.channel.name}`}
                                        onChange={this.update('message')}
                                        className="message-form__input"
                                    />
                                </div>
                            </form>
                        </section>
                        <section className="channels-panel-channel-users">
                            <ul>
                                {this.channelUserList()}
                            </ul>
                        </section>
                    </div>

                </div>
            )
        } else {
            return <h1>LOADING</h1>
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        server: state.entities.servers[ownProps.match.params.serverId],
        channel: state.entities.channels[ownProps.match.params.channelId],
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        messages: state.entities.messages,
    })
}

const mapDispatchToProps = (dispatch) => ({
    messageCreate: (message) => dispatch(messageCreate(message)),
    removeMessageErrors: () => dispatch(removeMessageErrors()),
    fetchMessages: (message) => dispatch(fetchMessages(message)),
    fetchUsers: (user) => dispatch(fetchUsers(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Channels)
