import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, REMOVE_MESSAGE } from "../../actions/message_actions";
import merge from 'lodash/merge'

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MESSAGES:
            return action.messages
        case RECEIVE_MESSAGE:
            return merge({}, state, action.message)
        // case REMOVE_MESSAGE:
        //     const copiedState = Object.assign({}, state);
        //     delete copiedState[Object.values(action.message)[0].id]
        //     return copiedState;
        default:
            return state
    }
}