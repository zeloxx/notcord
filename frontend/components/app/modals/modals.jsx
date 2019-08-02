import React, { Component } from 'react'
import AddServerModal from './add_server_modal';
import CreateServerModal from './create_server_modal';
import JoinServerModal from './join_server_modal';

export default class Modals extends Component {

    constructor(props) {
        super(props)

        this.state = {
            addServerModalOpen: false,
            createServerModalOpen: false,
            JoinServerModalOpen: false,
        }
    }

    render() {
        return (
            <div>
                <AddServerModal />
                <CreateServerModal createServer={this.props.createServer} />
                <JoinServerModal joinServer={this.props.joinServer}/>
            </div>
        )
    }
}
