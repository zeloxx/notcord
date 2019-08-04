import { connect } from 'react-redux';
import Servers from './servers';
import { fetchCurrentUserServers } from '../../../actions/server_actions';
import { closeModal, openModal } from '../../../actions/ui_actions';

const mapStateToProps = ({ entities }) => {
    return {
        servers: Object.values(entities.servers),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrentUserServers: () => dispatch(fetchCurrentUserServers()),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Servers)