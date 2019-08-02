import { connect } from 'react-redux'
import Modals from './modals';
import { createServer } from '../../../actions/server_actions';

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        joinServer: (inviteCode) => dispatch(joinServer(inviteCode)),
        createServer: (serverName) => dispatch(createServer(serverName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modals);