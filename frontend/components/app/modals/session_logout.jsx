import React, { Component } from 'react'

export default class SessionLogout extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.logout().then(() => this.props.closeModal())
    }

    render() {
        return (
            <div className="session-logout-modal">

                <div className="session-logout-modal-heading-body-container">
                    <h1 className="session-logout-modal__heading">Log out</h1>
                    <p className="session-logout-modal__body">Are you sure you want to logout?</p>
                </div>

                <div className="session-logout-modal-logout-button-container">
                    <button onClick={this.handleSubmit} className="session-logout-modal__logout-button">Log Out</button>
                </div>

            </div>
        )
    }
}
