import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return { ...response, success: true };
  },
  function (error: AxiosError<any>): AxiosResponse {
    if (error.response) {
      const response = error.response;
      let message = response.data.message;

      if (!navigator.onLine) {
        message = "No internet connection";
      }
      return { ...response, message, success: false };
    } else if (error.request) {
      return { ...error.response!, message: "Network error", success: false };
    } else {
      return { ...error.response!, message: "Network error", success: false };
    }
  }
);
