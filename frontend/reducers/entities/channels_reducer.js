import { RECEIVE_SERVER_CHANNEL, RECEIVE_SERVER_CHANNELS } from "../../actions/channel_actions";
import merge from 'lodash/merge'

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SERVER_CHANNELS:
            return action.channels

        case RECEIVE_SERVER_CHANNEL:
            debugger;
            return merge({}, state, action.channel)

        default:
            return state
    }
}