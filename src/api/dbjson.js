import axios from "axios";

const jsonResultsApi = axios.create({
  baseURL: "http://localhost:4000/testResults",
});

export default jsonResultsApi;
