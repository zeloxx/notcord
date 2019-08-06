import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Channels extends Component {

    render() {
        return (
            <div className="channels-panel">

                <nav className="channels-panel-nav">
                    <h1 className="channels-panel-nav__channel-name">channel_name</h1>
                </nav>

                <div className="chat-channel-users-container">
                    <section className="channels-panel-chat">
                        <div className="chat-conversation">
                            <div className="chat-conversation-message">
                                <div className="chat-conversation-message__avatar">avatar_icon</div>
                                <div className="message-container">
                                    <div className="username-timestamp-container">
                                        <div className="chat-conversation-message__username">username</div>
                                        <div className="chat-conversation-message__timestamp">timestamp</div>
                                    </div>
                                    <div className="chat-conversation-message__body">message_body_goes_here</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="channels-panel-channel-users">
                        <div className="channel-users-user">
                            <div className="channel-users-user__avatar">user_avatar</div>
                            <div className="channel-users-user__username">username</div>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Channels)
