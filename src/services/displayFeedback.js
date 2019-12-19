import {displayFeedbackAfterSubmit} from "./formService";

export function displayFeedback(isSuccess, feedbackType) {
    if(feedbackType === "connexion") {
        if (isSuccess) {
            return displayFeedbackAfterSubmit(2);
        }
        return displayFeedbackAfterSubmit(4);
    }
}