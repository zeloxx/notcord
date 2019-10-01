import * as APIUtil from "../util/message_api_util";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
export const REMOVE_MESSAGE_ERRORS = "REMOVE_MESSAGE_ERRORS";

export const removeMessageErrors = () => {
  return {
    type: REMOVE_MESSAGE_ERRORS
  };
};

export const receiveMessageErrors = errors => {
  return {
    type: RECEIVE_MESSAGE_ERRORS,
    errors
  };
};

export const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

export const receiveMessages = messages => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  };
};

export const messageCreate = message => dispatch => {
  return APIUtil.messageCreate(message).then(
    message => dispatch(receiveMessage(message)),
    err => dispatch(receiveMessageErrors(err.responseJSON))
  );
};

export const fetchMessages = message => dispatch => {
  return APIUtil.fetchMessages(message).then(
    messages => dispatch(receiveMessages(messages)),
    err => dispatch(receiveMessageErrors(err.responseJSON))
  );
};
