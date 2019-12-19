import {displayFeedbackAfterSubmit} from "./formService";
import {getFormData} from "../utils";
import {connect} from "./pageService";

export function saveUserState(userApiToken) {
    return localStorage.setItem("token", userApiToken);
}