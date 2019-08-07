import { RECEIVE_SERVER_CHANNEL, RECEIVE_SERVER_CHANNELS, REMOVE_CHANNEL } from "../../actions/channel_actions";
import merge from 'lodash/merge'

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SERVER_CHANNELS:
            return action.channels
        case RECEIVE_SERVER_CHANNEL:
            return merge({}, state, action.channel)
        case REMOVE_CHANNEL:
            const copiedState = Object.assign({}, state);
            delete copiedState[Object.values(action.channel)[0].id]
            return copiedState;
        default:
            return state
    }
}