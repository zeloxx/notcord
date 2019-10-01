import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const fetchUsers = userParams => dispatch => {
  return APIUtil.fetchUsers(userParams).then(users =>
    dispatch(receiveUsers(users))
  );
};
