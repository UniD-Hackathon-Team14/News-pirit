import axios from "axios";

const getUserID = async (name) => {
  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      url: `/accounts/get_user_id/?username=${name}`,
      method: "get",
    });
    // console.log('[SUCCESS] GET USER ID', data);
    return data;
  } catch (e) {
    // console.log('[FAIL] GET USER ID', e);
    return e;
  }
};

const getApi = {
  getUserID,
};
export default getApi;
