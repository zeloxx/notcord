import { connect } from 'react-redux'
import Modals from './modals';
import { createServer, joinServer } from '../../../actions/server_actions';
import { closeModal, openModal } from '../../../actions/ui_actions';

const mapStateToProps = (state) => {
    debugger
    return {
        modal: state.ui.modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        joinServer: (inviteCode) => dispatch(joinServer(inviteCode)),
        createServer: (serverName) => dispatch(createServer(serverName)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modals);