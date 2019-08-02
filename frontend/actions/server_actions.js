import * as APIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER"

export const receiveServers = (servers) => {
    return {
        type: RECEIVE_SERVERS,
        servers,
    }
}

export const receiveServer = (server) => {
    return {
        type: RECEIVE_SERVER,
        server,
    }
}

export const fetchCurrentUserServers = () => dispatch => {
    return APIUtil.fetchCurrentUserServers().then(servers => dispatch(receiveServers(servers)))
}

export const createServer = (serverName) => dispatch => {
    return APIUtil.createServer(serverName).then(server => dispatch(receiveServer(server)))
}

export const joinServer = (serverName) => dispatch => {
    return APIUtil.joinServer(serverName).then(server => dispatch(receiveServer(server)))
}