import {
  CREATE_USER_PROFILE,
  EDIT_USER_PROFILE,
  // DELETE_USER_PROFILE,
  FETCH_USER_PROFILE,
  FETCH_MATCHES,
  SAVE_MATCH,
  DISCARD_MATCH,
  CURRENT_MATCH,
  FETCH_CONNECTIONS,
  // SELECT_CONNECTION,
  // DISCARD_CONNECTION,
  // CURRENT_CONNECTION,
  VALIDATE_CHECKIN_CODE,
  FETCH_CHECKIN,
  EXPIRE_CHECKIN
} from "../actions/types"

export const user = (state = {}, action) => {
  switch (action) {
    case CREATE_USER_PROFILE:
      return action.user
    case EDIT_USER_PROFILE:
      return action.user
    case FETCH_USER_PROFILE:
      return action.user
    default:
      return state
  }
};

export const matches = (state = {}, action) => {
  switch (action) {
    case FETCH_MATCHES:
      return action.matches
    case SAVE_MATCH:
      return action.savedMatch
    case DISCARD_MATCH:
      return action.match
    default:
      return state
  }
};

export const currentMatch = (state = {}, action) => {
  switch (action) {
    case CURRENT_MATCH:
      return action.currentMatch
    default:
      return state
  }
};

export const connections = (state = {}, action) => {
  switch (action) {
    case FETCH_CONNECTIONS:
      return action.connections
    default:
      return state
  }
};

export const checkinCode = (state = {}, action) => {
  switch (action) {
    case VALIDATE_CHECKIN_CODE:
    case FETCH_CHECKIN:
    case EXPIRE_CHECKIN:
    default:
      return state
  }
};
