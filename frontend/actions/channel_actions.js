import * as APIUtil from "../util/channel_api_util";
export const RECEIVE_SERVER_CHANNELS = "RECEIVE_SERVER_CHANNELS";
export const RECEIVE_SERVER_CHANNEL = "RECEIVE_SERVER_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const REMOVE_CHANNEL_ERRORS = "REMOVE_CHANNEL_ERRORS";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

export const receiveServerChannels = channels => {
  return {
    type: RECEIVE_SERVER_CHANNELS,
    channels
  };
};

export const receiveServerChannel = channel => {
  return {
    type: RECEIVE_SERVER_CHANNEL,
    channel
  };
};

export const receiveChannelErrors = errors => {
  return {
    type: RECEIVE_CHANNEL_ERRORS,
    errors
  };
};

export const removeChannelErrors = () => {
  return {
    type: REMOVE_CHANNEL_ERRORS
  };
};

export const removeChannel = channel => {
  return {
    type: REMOVE_CHANNEL,
    channel
  };
};

export const channelCreate = channel => dispatch => {
  return APIUtil.channelCreate(channel).then(
    channel => dispatch(receiveServerChannel(channel)),
    err => dispatch(receiveChannelErrors(err.responseJSON))
  );
};

export const fetchServerChannels = server_id => dispatch => {
  return APIUtil.fetchServerChannels(server_id).then(
    channels => dispatch(receiveServerChannels(channels)),
    err => dispatch(receiveChannelErrors(err.responseJSON))
  );
};

export const channelDelete = id => dispatch => {
  return APIUtil.channelDelete(id).then(
    channel => dispatch(removeChannel(channel)),
    err => dispatch(receiveChannelErrors(err.responseJSON))
  );
};
