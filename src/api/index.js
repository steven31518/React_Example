import axios from "axios";
import { getEmpData, getGroupData } from "./member";

const apiPath = process.env.REACT_APP_API_PATH;

const api = {
  getEmpData: getEmpData(apiPath),
  getGroupData: getGroupData(apiPath),
};

export default api;


