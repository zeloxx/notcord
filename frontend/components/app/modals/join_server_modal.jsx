import React, { Component } from 'react'

export default class JoinServerModal extends Component {

    constructor() {
        super()
        this.state = {
            inviteCodeInput: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.removeServerErrors();
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.removeServerErrors();
        this.props.joinServer(this.state.inviteCodeInput);
    }

    render() {
        return (
            <div className="join-server-modal">
                <div className="join-server-header-body-container">
                    <div className="join-server-header">
                        <h1 className="join-server-header__heading">Join a server</h1>
                        <p className="join-server-header__text">Enter an Invite Code below to join an existing server.</p>
                    </div>

                    <form>
                        <div className="join-server-body">
                            <span className={`session-form__label ${this.props.serverErrors.length > 0 ? 'session-form__label--error' : ''}`}>Invite Code</span>
                            <span className="session-form__error-description">{this.props.serverErrors.length > 0 ? ` - ${this.props.serverErrors}` : ''}</span>
                            < input
                                type="text"
                                value={this.state.inviteCodeInput}
                                placeholder="Enter an Invite Code"
                                onChange={this.update('inviteCodeInput')}
                                className="join-server-body__input"
                            />
                        </div>
                    </form>
                </div>

                <div className="join-server-footer">
                    <button onClick={this.handleSubmit} className=" join-server-footer__btn">Join</button>
                </div>
            </div>
        )
    }
}




