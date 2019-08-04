import React, { Component } from 'react'

export default class JoinServerModal extends Component {

    constructor() {
        super()
        this.state = {
            inviteCodeInput: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.joinServer(this.state.inviteCodeInput);
    }

    render() {
        return (
            <div className="modal">
                <div className="join-server-header">
                    <h1 className="join-server-header__heading">Join a server</h1>
                    <p className="join-server-header__text">Enter an Invite Code below to join an existing server.</p>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="join-server-body">
                        <h1 className="join-server-body__heading">Invite Code</h1>
                        < input
                            type="text"
                            value={this.state.inviteCodeInput}
                            placeholder="Enter an Invite Code"
                            onChange={this.update('inviteCodeInput')}
                            className="join-server-body__input"
                        />
                    </div>
                    <div className="join-server-footer">
                        <button className="btn">Join</button>
                    </div>
                </form>
            </div>
        )
    }
}




