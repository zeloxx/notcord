import React, { Component } from 'react'

export default class CreateServerModal extends Component {

    constructor() {
        super()
        this.state = {
            serverNameInput: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createServer(this.state.serverNameInput);
    }

    render() {
        return (
            <div className="modal-background">
                <div className="modal">

                    <div className="create-server-header">
                        <h1 className="create-server-header__heading">Create your server</h1>
                        <p className="create-server-header__text">By creating a server, you will have access to free text chat to use amongst your friends.</p>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <div className="create-server-body">
                            <h1 className="create-server-body__heading">Server Name</h1>
                            < input
                                type="text"
                                value={this.state.serverNameInput}
                                placeholder="Enter a server name"
                                onChange={this.update('serverNameInput')}
                                className="create-server-body__input"
                            />
                        </div>
                        <div className="create-server-footer">
                            <button className="btn">Create</button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}



