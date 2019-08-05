import React from 'react'
import AddServerModal from './add_server_modal';
import CreateServerModal from './create_server_modal';
import JoinServerModal from './join_server_modal';
import ServerInviteModal from './server_invite_modal';
import ServerLeaveModal from './server_leave_modal';
import SessionLogout from './session_logout';

export default function Modals(props) {

    debugger;

    if (!props.state.ui.modal) {
        return null;
    }

    let component;
    switch (props.state.ui.modal) {
        case 'sessionLogout':
            component = <SessionLogout
                logout={props.logout}
                closeModal={props.closeModal}
            />
            break;

        case 'addServer':
            component = <AddServerModal
                openModal={props.openModal}
            />
            break;
        case 'createServer':
            component = <CreateServerModal
                createServer={props.createServer}
                closeModal={props.closeModal}
                serverErrors={props.state.errors.server}
                removeServerErrors={props.removeServerErrors}
            />
            break;
        case 'joinServer':
            component = <JoinServerModal
                joinServer={props.joinServer}
                closeModal={props.closeModal}
                serverErrors={props.state.errors.server}
                removeServerErrors={props.removeServerErrors}
            />
            break;

        case 'serverInvite':
            component = <ServerInviteModal
                {...props}
            />
            break;

        case 'serverLeave':
            component = <ServerLeaveModal
                {...props}
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
