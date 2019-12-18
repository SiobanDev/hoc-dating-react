import {validateInputsFillingState} from "./formService";
import {validateMail} from "./formService";

export function validateConnectionForm() {
    const $mailRegexErrorMessage = document.getElementById("invalid-email-login-feedback");
    const $emptyErrorMessage = document.getElementById('invalid-empty-feedback');

    if (validateInputsFillingState("connection")) {
        $emptyErrorMessage.style.display = "none";
    } else {
        $emptyErrorMessage.style.display = "block";
    }

    if (validateMail()) {
        $mailRegexErrorMessage.style.display = "none";
    } else {
        $mailRegexErrorMessage.style.display = "block";
    }

    return (
        !!(
            validateInputsFillingState("connection") &&
            validateMail()
        ));
}




