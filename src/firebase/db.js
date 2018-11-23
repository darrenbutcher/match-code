import { db } from "./firebase";

export const createUserProfile = async (
  currentUser,
  { firstname, lastname, phone, email, bio, skills, interests }
) => {
  await db.collection(`users/${currentUser.uid}`).add({
    firstname,
    lastname,
    phone,
    email,
    bio,
    skills,
    interests
  });
};

export const isUserOnboarded = async (currentUser) => {
  const doc = await db.collection('users').doc(currentUser.uid) //.where('uid', '==', currentUser.uid)
  const data = await doc.get()
  return data.exists
}

export const editUserProfile = async (currentUser, data) => {
  await db.collection(`users/${currentUser.uid}`).update(data);
}

export const fetchUserProfile = async currentUser =>
  await db.collection(`users/${currentUser.uid}`);

export const fetchUserByUid = async uid => await db.collection(`users/${uid}`);

export const fetchMatchesBySkill = async match =>
  await db.collection("users").where("skills", "array-contains", match);

export const fetchMatchesByInterest = async match =>
  await db.collection("users").where("interets", "array-contains", match);

export const fetchMatches = async match =>
  await db
    .collection("users")
    .where("skills", "array-contains", match)
    .where("interets", "array-contains", match);

export const saveMatch = async (currentUser, connectionId) => {
  await db.collection(`users/${currentUser.uid}/connections`).add({
    connectionId
  });
};

export const fetchConnections = async currentUser =>
  await db.collection(`users/${currentUser.uid}/connections`);