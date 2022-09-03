import axios from "axios";
import { apiBaseUrl } from "../config/base-urls";

export default axios.create({
   baseUrl: apiBaseUrl
});