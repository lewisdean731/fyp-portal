export const asyncGetRequest = async (url) => {
  try {
    console.log(`GET ${url}`);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
