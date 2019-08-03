import { connect } from 'react-redux'
import Navbar from './navbar';
import { leaveServer } from '../../../actions/server_actions';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        leaveServer: (id) => dispatch(leaveServer(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);