import { connect } from 'react-redux'
import Modals from './modals';
import { createServer, joinServer, leaveServer, removeServerErrors } from '../../../actions/server_actions';
import { closeModal, openModal } from '../../../actions/ui_actions';
import { logout } from '../../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeServerErrors: () => dispatch(removeServerErrors()),
        joinServer: (inviteCode) => dispatch(joinServer(inviteCode)),
        createServer: (serverName) => dispatch(createServer(serverName)),
        leaveServer: (serverId) => dispatch(leaveServer(serverId)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
        channelCreate: (data) => dispatch(createChannel(data)),
        removeChannelErrors: () => dispatch(removeChannelErrors()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modals));