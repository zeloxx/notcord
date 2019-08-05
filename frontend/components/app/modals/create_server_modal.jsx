import React, { Component } from 'react'

export default class CreateServerModal extends Component {

    constructor() {
        super()
        this.state = {
            serverNameInput: '',
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
        this.props.removeServerErrors;
        this.props.createServer(this.state.serverNameInput).then(() => this.props.closeModal());
    }

    render() {

        return (
            <div className="create-server">

                <div className="create-server-container">

                    <div className="create-server-header">
                        <h1 className="create-server-header__heading">Create your server</h1>
                        <p className="create-server-header__text">By creating a server, you will have access to free text chat to use amongst your friends.</p>
                    </div>

                    <form>
                        <div className="create-server-body">
                            <span className={`session-form__label ${this.props.serverErrors.length > 0 ? 'session-form__label--error' : ''}`}>Server Name</span>
                            <span className="session-form__error-description">{this.props.serverErrors.length > 0 ? ` - ${this.props.serverErrors}` : ''}</span>
                            < input
                                type="text"
                                value={this.state.serverNameInput}
                                placeholder="Enter a server name"
                                onChange={this.update('serverNameInput')}
                                className="create-server-body__input"
                            />
                        </div>
                    </form>

                </div>

                <div className="create-server-footer">
                    <button onClick={this.handleSubmit} className="create-server-footer__btn">Create</button>
                </div>
            </div>
        )
    }
}



