import React, { Component } from 'react'

export default class ChannelCreate extends Component {

    constructor() {
        super()
        this.state = {
            channelNameInput: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    serverId() {
        const splitPath = this.props.location.pathname.split('/');
        const serverIdIndex = splitPath.indexOf("channels") + 1;
        const serverId = splitPath[serverIdIndex];
        return serverId;
    }

    componentDidMount() {
        this.props.removeChannelErrors();
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.removeChannelErrors;
        this.props.createServer({ name: this.state.channelNameInput, serverId: this.serverId() }).then(() => this.props.closeModal());
    }

    render() {
        return (
            <div>
                <form>
                    <span className={`session-form__label ${this.props.state.errors.channelErrors.length > 0 ? 'session-form__label--error' : ''}`}>Server Name</span>
                    <span className="session-form__error-description">{this.props.state.errors.channelErrors.length > 0 ? ` - ${this.props.state.channelErrors}` : ''}</span>
                    < input
                        type="text"
                        value={this.state.channelNameInput}
                        placeholder="Enter a channel name"
                        onChange={this.update('channelNameInput')}
                    />
                </form>
                <button onClick={this.handleSubmit}>Create Channel</button>
            </div>
        )
    }
}
