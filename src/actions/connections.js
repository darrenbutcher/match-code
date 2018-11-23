import {
  FETCH_CONNECTIONS
  // SELECT_CONNECTION,
  // DISCARD_CONNECTION,
  // CURRENT_CONNECTION
} from "./types";

import { auth, db } from "../firebase";

const { currentUser } = auth.auth;

export const fetchConnections = () => {
  return async dispatch => {
    try {
      const connectionIds = await db.fetchConnections(currentUser);
      const connections = connectionIds.map(
        async user => await db.fetchUserByUid(user.userId)
      );
      dispatch({ type: FETCH_CONNECTIONS, connections });
    } catch (e) {
      console.log(e);
    }
  };
};

// export const selectConnection = () => {};
// export const discardConnection = () => {};
// export const currentConnection = () => {};
