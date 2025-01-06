import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.params = config.params || {};
    config.params["api_key"] = "d2496d13482686b2ff5e3d0cccc98d11";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
