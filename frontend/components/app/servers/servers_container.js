import { connect } from 'react-redux';
import Servers from './servers';
import { fetchCurrentUserServers } from '../../../actions/server_actions';

const mapStateToProps = (state) => {
    debugger;
    return {
        servers: state.entities.servers
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        fetchCurrentUserServers: () => dispatch(fetchCurrentUserServers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Servers)