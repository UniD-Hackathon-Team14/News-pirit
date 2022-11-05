import axios from "axios";

const login = async(body) => {
    try {
        const { data } = await axios({
          baseURL: API_DOMAIN,
          url: `login/`,
          method: "post",
          data: body,
        });
        return data;
    } catch (e) {
        return e;
    }
}

const signup = async (body) => {
  // console.log(body);
  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      url: `/accounts/register/`,
      method: "post",
      data: body,
    });
    // console.log('[SUCCESS] SIGNUP', data);
    return data;
  } catch (e) {
    // console.log('[FAIL] SIGNUP', e);
    return e;
  }
};

const imageAnswer = async (body) => {
  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      url: `/answer/image/`,
      method: "post",
      data: body,
    });
     return data;
  } catch (e) {
    return e;
  }
}

const postApi = {
  signup, login, imageAnswer
};
export default postApi;
