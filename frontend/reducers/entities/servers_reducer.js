import {RECEIVE_SERVERS} from '../../actions/server_actions'

const serversReducer = (state = {}, action) => {
    switch (action.type) { 
        case RECEIVE_SERVERS:
            return action.servers
        default:
            return state
    }
}

export default serversReducer;