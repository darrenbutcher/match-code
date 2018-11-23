import {
  CREATE_USER_PROFILE,
  EDIT_USER_PROFILE,
  FETCH_USER_PROFILE
} from "./types";
import { auth, db } from "../firebase";

const { currentUser } = auth.auth;

export const creatUserProfile = ({
  firtname,
  lastname,
  phone,
  email,
  bio,
  skills,
  interests
}) => {
  return async dispatch => {
    try {
      await db.createProfile(currentUser, {
        userId: currentUser.uid,
        firtname,
        lastname,
        phone,
        email,
        bio,
        skills,
        interests
      });
      dispatch({
        type: CREATE_USER_PROFILE,
        user: { firtname, lastname, phone, email, bio, skills, interests }
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const editUserProfile = data => {
  return async dispatch => {
    try {
      await db.editUserProfile(currentUser, data);
      dispatch({ type: EDIT_USER_PROFILE, user: data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchUserProfile = currentUser => {
  return async dispatch => {
    try {
      const user = await db.fetchUserProfile(currentUser);
      dispatch({ type: FETCH_USER_PROFILE, user });
    } catch (e) {
      console.log(e);
    }
  };
};

// export const deleteUserProfile = () => {
//   return dispatch({ type: DELETE_USER_PROFILE, user: currentUser });
// };

// export const fetchUserProfile  = () => {
//   const { currentUser } = auth.auth;

//   return dispatch =>
//     db.fetchUserProfile(currentUser)
//       .on('value', (snapshot) => {
//         dispatch({ type: EMPLOYEES_FETCH_SUCCESS, employees: snapshot.val() });
//       });
// };
