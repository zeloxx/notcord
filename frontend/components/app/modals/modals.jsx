import React from 'react'
import AddServerModal from './add_server_modal';
import CreateServerModal from './create_server_modal';
import JoinServerModal from './join_server_modal';

export default function Modals(props) {

    if (!props.modal) {
        return null;
    }

    let component;
    switch (props.modal) {
        case 'addServer':
            component = <AddServerModal
                openModal={props.openModal}
            />
            break;
        case 'createServer':
            component = <CreateServerModal
                createServer={props.createServer}
            />
            break;
        case 'joinServer':
            component = <JoinServerModal
                joinServer={props.joinServer}
            />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={props.closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}
