import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
    withCredentials: true,
  });
};


// 🔥 SAFE RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {

    if (error.response && error.response.status === 401) {
      console.log("401 received — Not auto logging out");

      // ❌ DO NOT auto logout here
      // ❌ DO NOT navigate("/")
      // Just return error normally
    }

    return Promise.reject(error);
  }
);