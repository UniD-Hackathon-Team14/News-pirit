import axios from "axios";

const test = async () => {
    try {
        const {data} = await axios({
            baseURL: API_DOMAIN,
            url: 'category/',
            method: 'get',
        });
        console.log(data)
        return data;
    } catch (e) {
        console.log(e)
        return e;
    }
}

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

const checkDuplicateUsername = async (username) => {
  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      url: `/check_username/?username=${username}`,
      method: "get",
    });
    return data;
  } catch (e) {
    return e;
  }

}

const getApi = {
  getUserID, test, checkDuplicateUsername
};
export default getApi;
