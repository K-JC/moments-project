import axios from "axios";

axios.defaults.baseURL = 'https://rest-framework-1160aadccddd.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] ='multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();