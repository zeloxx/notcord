import React, { Component } from 'react'

export default class AddServerModal extends Component {
    render() {
        return (
            <div className="modal-background">
                <div className="modal">
                    <h1>Oh, another server huh?</h1>

                    <div className="card">
                        <h2 className="card__header">Create</h2>
                        <p className="card__text">Create a new server and invite your friends. It's free!</p>
                        <button className="btn">Create a server</button>
                    </div>

                    <div className="card">
                        <h2 className="card__header">Join</h2>
                        <p className="card__text">Enter an invitation code and join your friend's server.</p>
                        <button className="btn">Join a server</button>
                    </div>
                </div>
            </div>
        )
    }
}
