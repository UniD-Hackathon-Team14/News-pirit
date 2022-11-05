import axios from "axios";

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

const postApi = {
  signup,
};
export default postApi;
