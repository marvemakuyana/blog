import axios from "axios";

const publicAxios = axios.create({
  baseURL: "http://localhost:3001",
});
export default publicAxios;
