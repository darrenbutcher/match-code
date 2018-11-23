import {
  FETCH_MATCHES,
  SAVE_MATCH,
  DISCARD_MATCH,
  CURRENT_MATCH
} from "./types";

import { auth, db } from "../firebase";

const { currentUser } = auth.auth;

export const fetchMatches = () => {
  return async dispatch => {
    try {
      let matches = [];
      const userProfile = await db.fetchUserProfile(currentUser);
      const { skills, interests } = userProfile;

      const matchedSkills = skills.map(async skill => {
        await db.fetchMatchesBySkill(skill);
      });

      const matchedInterests = interests.map(async interest => {
        await db.fetchMatchesByInterest(interest);
      });

      matches = [...matchedSkills, ...matchedInterests];
      // look for unique and user profile need Todo!!!
      // check if matches is in connections
      dispatch({ type: FETCH_MATCHES, matches });
    } catch (e) {
      console.log(e);
    }
  };
};

export const saveMatch = match => {
  return async dispatch => {
    try {
      const savedMatch = await db.saveMatch(currentUser, match.userId);
      dispatch({ type: SAVE_MATCH, savedMatch });
    } catch (e) {
      console.log(e);
    }
  };
};

export const discardMatch = match => ({ type: DISCARD_MATCH, match });
export const currentMatch = currentMatch => ({ type: CURRENT_MATCH, currentMatch });