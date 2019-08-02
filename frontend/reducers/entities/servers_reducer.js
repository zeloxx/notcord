import { RECEIVE_SERVERS } from '../../actions/server_actions'
import { RECEIVE_SERVER } from '../../actions/server_actions'
import merge from 'lodash/merge';

const serversReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.servers
        case RECEIVE_SERVER:
            return merge({}, state, action.server)
        default:
            return state
    }
}

export default serversReducer;