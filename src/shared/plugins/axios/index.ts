import { localStg } from "@/shared/utils/storage";
import axios, { AxiosError, AxiosResponse } from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

axios.interceptors.request.use((config) => {
  const token = localStg.get("token");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return { ...response, success: true };
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (error: AxiosError<any>): AxiosResponse {
    if (error.response) {
      const response = error.response;
      let message = response.data.message;

      if (!navigator.onLine) {
        message = "No internet connection";
      }
      return { ...response, message, success: false };
    } else if (error.request) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return { ...error.response!, message: "Network error", success: false };
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return { ...error.response!, message: "Network error", success: false };
    }
  }
);
