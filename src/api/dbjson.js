import axios from "axios";

const jsonResultsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: "http://localhost:4000/testResults",
});

export default jsonResultsApi;
