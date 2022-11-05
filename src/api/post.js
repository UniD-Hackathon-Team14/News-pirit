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

const postAudio = async (body) => {
  const formData = new FormData();
  formData.append("qna_question", body.question);
  formData.append("audio_dirs", body.audio_dirs);
  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      url: `/answer/audio/`,
      method: "post",
      data: formData,
    });
    console.log(res);
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
  postAudio,
};
export default postApi;
