import * as APIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";

export const receiveServers = (servers) => {
    return {
        type: RECEIVE_SERVERS,
        servers,
    }
}

export const fetchCurrentUserServers = () => dispatch => {
    return APIUtil.fetchCurrentUserServers().then(servers => dispatch(receiveServers(servers)))
}

window.fetchCurrentUserServers = fetchCurrentUserServers;