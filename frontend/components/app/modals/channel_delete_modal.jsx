import React, { Component } from 'react'
import { closeModal } from '../../../actions/ui_actions';

export default class ChannelDeleteModal extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.channelDelete(this.props.channel.id).then(() => this.props.closeModal());
    }

    render() {
        return (
            <div className="modal">
                <div className="modal-body-container">
                    <h1 className="modal__heading">Delete Channel</h1>
                    <p className="modal__text">Are you sure you want to delete #{this.props.channel.name}? This cannot be undone.</p>
                </div>
                <div className="modal-footer-container">
                    <button onClick={this.handleSubmit} className="modal__btn modal__btn--red">Delete Channel</button>
                </div>
            </div>
        )
    }
}
