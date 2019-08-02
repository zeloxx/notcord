import { connect } from 'react-redux';
import Servers from './servers';
import { fetchCurrentUserServers } from '../../../actions/server_actions';

const mapStateToProps = ({entities}) => {
    return {
        servers: Object.values(entities.servers),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrentUserServers: () => dispatch(fetchCurrentUserServers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Servers)