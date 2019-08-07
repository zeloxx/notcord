import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ChannelCreate extends Component {

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

        this.props.channelCreate({ name: this.state.channelNameInput, server_id: this.serverId() })
            .then(() => this.props.closeModal())
            .then(() => this.props.removeChannelErrors())
    }

    render() {
        return (
            <div className="modal">
                <div className="modal-body-container">
                    <p className="modal__heading">Create a text channel</p>
                    <label className={`form__label ${this.props.channelErrors.length > 0 ? 'form__label--error' : ''} `}>channel name</label>
                    <span className="form__error-description">{this.props.channelErrors.length > 0 ? ` - ${this.props.channelErrors} ` : ''}</span>
                    < input
                        type="text"
                        value={this.state.channelNameInput}
                        placeholder="Enter a channel name"
                        onChange={this.update('channelNameInput')}
                        className="form__input"
                    />
                </div>
                <div className="modal-footer-container">
                    <button onClick={this.handleSubmit} className="modal__btn modal__btn--blue">Create Channel</button>
                </div>
            </div>
        )
    }
}


export default withRouter(ChannelCreate);