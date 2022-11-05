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

const getProfile = async () => {
  try {
    const data = await axios({
      baseURL: API_DOMAIN,
      url: `/profile/`,
      method: "get",
      withCredentials: true,
    });
    console.log(data);
    console.log("[SUCCESS] GET PROFILE", data);
    return data;
  } catch (e) {
    console.log("[FAIL] GET PROFILE", e);
    return e;
  }
};

const getAudioQuestion = async () => {
  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      url: `/question/?category=직장&type=audio`,
      method: "get",
    });
    // console.log('[SUCCESS] GET AUDIO QUESTION', data);
    return data;
  } catch (e) {
    // console.log('[FAIL] GET AUDIO QUESTION', e);
    return e;
  }
};

const getImages = async (category) => {
  try {
    const { data } = await axios({
      baseURL: API_DOMAIN,
      params: {
        category: category,
        type: "image",
      },
      url: "/question/",
      method: "get",
    });
    return data;
  } catch (e) {
    return e;
  }
};

const getHistory = async (filterData) => {
  try {
    console.log(API_DOMAIN);
    const { data } = await axios({
      baseURL: API_DOMAIN,
      params: {
        category: filterData.category,
        type: `${filterData.type}`,
      },
      url: `/history`,
      method: "get",
      withCredentials: true,
    });
    return data;
  } catch (e) {
    return e;
  }
};

const getApi = {
  getUserID,
  getProfile,
  getAudioQuestion,
  getImages,
  getHistory,
};
export default getApi;
