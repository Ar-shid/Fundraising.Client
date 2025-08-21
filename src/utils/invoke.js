import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const invoke = ({ url, method = "GET", data, ...rest }) =>
  axios({ baseURL: BASE_URL, url, method, data, ...rest });

export default invoke;
