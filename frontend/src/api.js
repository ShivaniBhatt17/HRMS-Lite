import axios from "axios";

const api = axios.create({
  baseURL: "https://hrms-lite-tgrv.onrender.com/api/",
});

export default api;
