import { RECEIVE_MESSAGE_ERRORS, REMOVE_MESSAGE_ERRORS } from "../../actions/channel_actions";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MESSAGE_ERRORS:
            return action.errors;

        case REMOVE_MESSAGE_ERRORS:
            return [];

        default:
            return state;
    }
}