import Axios from "axios";
import {loginEndPoint} from "../constants";

export const apiLogin = async () => {
    return await Axios.get(loginEndPoint);
};