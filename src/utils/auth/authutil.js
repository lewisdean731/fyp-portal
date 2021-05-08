import {asyncGetRequest} from "../apiUtil";

export const verifyToken = async (token) => {
  console.log("Checking login status..");
  return await asyncGetRequest(`/api/auth/verifytoken?token=${token}
  `, token);
};
