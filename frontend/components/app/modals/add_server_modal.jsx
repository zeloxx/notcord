import React, { Component } from 'react'

export default class AddServerModal extends Component {
    render() {
        return (
            <div className="add-server-modal">
                <h1 className="modal__header">Oh, another server huh?</h1>
                
                <div className="cards-container">
                    <div className="card">
                        <h2 className="card__header card__header--blue">Create</h2>
                        <p className="card__text">Create a new server and invite your friends. It's free!</p>
                        <div className="card__icon card__icon--create"></div>
                        <button onClick={() => this.props.openModal("createServer")} className="modal__btn modal__btn--blue">Create a server</button>
                    </div>

                    <div className="card margin-left--l">
                        <h2 className="card__header card__header--green">Join</h2>
                        <p className="card__text">Enter an invitation code and join your friend's server.</p>
                        <div className="card__icon card__icon--join"></div>
                        <button onClick={() => this.props.openModal("joinServer")} className="modal__btn modal__btn--green">Join a server</button>
                    </div>
                </div>

            </div>
        )
    }
}
