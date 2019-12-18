import {validateConnectionForm} from "./connectionFormService";
import {displayFeedbackAfterSubmit} from "./formService";
import {redirectionAction, getFormData} from "../utils";
import {showLoader, connect} from "./pageService";

export async function doConnectionActions(e) {

    e.preventDefault();

    // showLoader(true, 'app');

    try {
        const apiUserConnected = await connect(getFormData(['username', 'password']));
        // showLoader(false, 'app');

        if (apiUserConnected) {
            displayFeedbackAfterSubmit(2);

            return true;
        }
        displayFeedbackAfterSubmit(4);
        return false;

    } catch (error) {
        throw new Error(error);
    }
}