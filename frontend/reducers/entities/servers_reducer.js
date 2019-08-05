import {
    RECEIVE_SERVERS,
    RECEIVE_SERVER,
    REMOVE_SERVER
} from '../../actions/server_actions'
import merge from 'lodash/merge';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.servers
        case RECEIVE_SERVER:
            return merge({}, state, action.server)
        case REMOVE_SERVER:
            const copiedState = Object.assign({}, state);
            delete copiedState[Object.values(action.server)[0].id]
            return copiedState;
        default:
            return state
    }
}

export default serversReducer;