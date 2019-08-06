import { RECEIVE_CHANNEL_ERRORS, REMOVE_CHANNEL_ERRORS } from "../../actions/channel_actions";

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_CHANNEL_ERRORS:
            return action.errors

        case REMOVE_CHANNEL_ERRORS:
            return []

        default:
            return state
    }
}