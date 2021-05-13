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

export const getUserFirestoreInformation = async (uid, token) => {
  return await asyncGetRequest(`/api/user/${uid}`, token)
};
