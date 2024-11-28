import axios from "axios";

const jsonResultsApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default jsonResultsApi;
