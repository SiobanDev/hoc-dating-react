import Axios from "axios";
import {loginEndPoint} from "../constants";


// export const apiLogin = async (userData) => {
//     return await Axios.get(loginEndPoint, userData);
// };

export const apiLogin = async (userData) => {
    const res = await Axios.post(loginEndPoint, userData);
    return res;
    // return await Axios.get("http://127.0.0.1:8002/api/login_check", userData);
    // return Axios({
    //     method: 'post',
    //     url: 'http://127.0.0.1:8002/api/login_check',
    //     data: userData,
    //     responseType: 'json',
    // });
};