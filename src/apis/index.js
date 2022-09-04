import axios from "axios";
import { apiBaseUrl } from "../config/base-urls";

// publich header
const publicHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
};
// header private
const token = 'eyqryudbEYGtfWETYUHVHFG3ehhgf'
const privateHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer +${token}`
};
export default axios.create({
   baseUrl: apiBaseUrl,
   headers: privateHeaders
});