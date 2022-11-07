import axios from "axios";

const login = async (body) => {
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
};

const signup = async (body) => {
  // console.log(body);
  try {
    const data = await axios({
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
};

const postAudio = async (body) => {
  const formData = new FormData();
  formData.append("question", body.question);
  formData.append("audio_dirs", body.audio_dirs);
  formData.append("user", body.userId);

  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      url: `/answer/audio/`,
      method: "post",
      data: formData,
      withCredentials: true,
    });
    // console.log('[SUCCESS] POST AUDIO', data);
    return data;
  } catch (e) {
    // console.log('[FAIL] POST AUDIO', e);
    return e;
  }
};

const postApi = {
  signup,
  login,
  imageAnswer,
  postAudio,
};
export default postApi;
