import apiUtil from "../apiUtil";

export const verifyToken = async (token) => {
  console.log("Checking login status..");
  return await apiUtil.asyncGetRequest(`/api/auth/verifytoken?token=${token}
  `);
};
