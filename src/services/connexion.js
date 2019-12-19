import {getFormData} from "../utils";
import {connect} from "./pageService";


export async function connexion(e) {
    e.preventDefault();

    try {
        const userApiToken = await connect(getFormData(['username', 'password']));
        return userApiToken;

    } catch (error) {
        throw new Error(error);
    }
}