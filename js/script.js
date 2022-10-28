import { Modal } from "./modal.js";
import { AlertError } from "./alertError.js";
import { IMC, notNumber} from "./utils.js";

const form = document.querySelector("form");
const inputWheight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (eventSubmit) => {
    eventSubmit.preventDefault()

    const weight = inputWheight.value
    const height = inputHeight.value

    const showAlertErro = notNumber(weight) || notNumber(height)

    if (showAlertErro) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = IMC(weight, height)

    const resultmessage = `Seu IMC é de ${result}`

    Modal.resultSpan.innerText = resultmessage
    Modal.open()
};

inputWheight.oninput = () => {AlertError.close()};
inputHeight.oninput = () => {AlertError.close()};


