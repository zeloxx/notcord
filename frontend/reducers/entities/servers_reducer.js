import { RECEIVE_SERVERS } from '../../actions/server_actions'
import { RECEIVE_SERVER } from '../../actions/server_actions'
import { REMOVE_SERVER } from '../../actions/server_actions'
import merge from 'lodash/merge';

const serversReducer = (state = {}, action) => {
    debugger;
    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.servers
        case RECEIVE_SERVER:
            return merge({}, state, action.server)
        case REMOVE_SERVER:
            copiedState = Object.assign({}, state);
            delete copiedState[action.server];
            return copiedState;
        default:
            return state
    }
}

export default serversReducer;