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
      url: `/register/`,
      method: "post",
      data: body,
    });
    return data;
  } catch (e) {
    return e;
  }
};

const postApi = {
  signup, login
};
export default postApi;
