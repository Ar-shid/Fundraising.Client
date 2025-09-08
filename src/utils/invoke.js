import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const invoke = ({ url, method = "GET", data, token, ...rest }) => {
  const config = {
    baseURL: BASE_URL,
    url,
    method,
    data,
    ...rest,
  };

  // Add bearer token if provided
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  // Debug: Log the request configuration
  console.log("Invoke Request Config:", {
    url: `${BASE_URL}${url}`,
    method,
    data: data instanceof FormData ? "FormData" : data,
    headers: config.headers,
  });

  if (data instanceof FormData) {
    console.log("FormData contents in invoke:");
    for (let [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }
  }

  return axios(config);
};

export default invoke;
