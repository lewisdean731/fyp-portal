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
    throw error;
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
    throw error;
  }
};

export const asyncPostRequest = async (url, data, token) => {
  try {
    console.log(`POST ${url}`);
    const response = await axios.post(url, data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const asyncDeleteRequest = async (url, token) => {
  try {
    console.log(`DELETE ${url}`);
    const response = await axios.delete(url, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data.error;
  }
};

// GET

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
};

// CREATE

export const createTeamInFirestore = async (teamData, token) => {
  return await asyncPutRequest(
    `/api/team/create`,
    {
      teamName: teamData.name,
      teamMembers: [teamData.uid],
      teamAdmins: [teamData.uid],
    },
    token
  );
};

export const createProjectInFirestore = async (projectData, token) => {
  let data = {
    projectName: projectData.name,
    teamId: projectData.teamId,
    projectDependencies: {
      directDependencies: [],
    },
    projectType: {},
    yellowWarningPeriod: (projectData.yellowWarningPeriod * 8.64e+7), // Days to milliseconds
    redWarningPeriod: (projectData.redWarningPeriod * 8.64e+7),
  };
  if (projectData.type === "npm") {
    data.projectType["npm"] = {
      packageJsonUrl: projectData.packageJsonUrl,
      packageLockUrl: projectData.packageLockUrl,
    };
  }
  return await asyncPutRequest(`/api/project/create`, data, token);
};

export const createUserInFirestore = async (uid, token) => {
  return await asyncPutRequest(`/api/user/create`, { uid: uid }, token);
};

// UPDATE

export const updateProjectInFirestore = async (
  projectId,
  projectData,
  token
) => {
  let data = {
    projectName: projectData.projectName,
    projectType: {},
  };
  if (projectData.projectType === "npm") {
    console.log("NPM");
    data.projectType = {
      npm: {
        packageJsonUrl: projectData.packageJsonUrl,
        packageLockUrl: projectData.packageLockUrl,
      },
    };
  }
  console.log(data);
  return await asyncPostRequest(`/api/project/${projectId}`, data, token);
};

// DELETE

export const deleteProjectInFirestore = async (projectId, token) => {
  return await asyncDeleteRequest(`/api/project/${projectId}`, token).catch(
    (error) => {
      throw error;
    }
  );
};
