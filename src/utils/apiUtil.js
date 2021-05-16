import axios from "axios";

export const asyncGetRequest = async (url, token) => {
  try {
    console.log(`GET ${url}`);
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const asyncPutRequest = async (url, data, token) => {
  try {
    console.log(`PUT ${url}`);
    const response = await axios.put(url, data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUserFirestoreInformation = async (uid, token) => {
  return await asyncGetRequest(`/api/user/${uid}`, token);
};

export const getTeamFirestoreInformation = async (teamId, token) => {
  return await asyncGetRequest(`/api/team/${teamId}`, token);
};

export const getProjectFirestoreInformation = async (projectId, token) => {
  return await asyncGetRequest(`/api/project/${projectId}`, token);
};

export const getAllProjectsForUser = async (uid, token) => {
  return await asyncGetRequest(`/api/getAllProjectsForUser?uid=${uid}`, token);
}

export const createTeamInFirestore = async (teamData, token) => {
  return await asyncPutRequest(`/api/team/create`, {
    teamName: teamData.name,
    teamMembers: [teamData.uid],
    teamAdmins: [teamData.uid]
  },
  token);
};