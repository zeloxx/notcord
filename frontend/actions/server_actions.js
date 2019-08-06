import * as APIUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER"
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS"
export const REMOVE_SERVER_ERRORS = "REMOVE_SERVER_ERRORS"


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

export const removeServer = (server) => {
    return {
        type: REMOVE_SERVER,
        server
    }
}

export const receiveServerErrors = (errors) => {
    return {
        type: RECEIVE_SERVER_ERRORS,
        errors,
    }
}

export const removeServerErrors = () => {
    return {
        type: REMOVE_SERVER_ERRORS,
    }
}

export const fetchCurrentUserServers = () => dispatch => {
    return APIUtil.fetchCurrentUserServers().then(servers => dispatch(receiveServers(servers)), err => (
        dispatch(receiveServerErrors(err.responseJSON))
    ))
}

export const createServer = (serverName) => dispatch => {
    return APIUtil.createServer(serverName).then(server => dispatch(receiveServer(server)), err => (
        dispatch(receiveServerErrors(err.responseJSON))
    ))
}

export const joinServer = (serverName) => dispatch => {
    return APIUtil.joinServer(serverName).then(server => dispatch(receiveServer(server)), err => (
        dispatch(receiveServerErrors(err.responseJSON))
    ))
}

export const leaveServer = (id) => dispatch => {
    return APIUtil.leaveServer(id).then(server => dispatch(removeServer(server)), err => (
        dispatch(receiveServerErrors(err.responseJSON))
    ))
}