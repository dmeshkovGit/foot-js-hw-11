import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
function getError(errorText) {
iziToast.error({
  message: errorText,
    messageColor: "#FFF",
    messageSize: "16px",
    messageLineHeight: "24px",
    position: "topRight",
    transitionIn: "fadeInLeft",
    backgroundColor: "#EF4040",
    progressBarColor: "#FFBEBE;",
    title:"Error",
    titleColor:"#FFF",
    titleSize:"16px",
    titleLineHeight: "24px",
    timeout: 5000,
    iconUrl: "./img/error-icon.svg",
    theme: "dark",
});
}
function getSuccess(successText) {
    iziToast.success({
   message: successText,
    messageColor: "#FFF",
    messageSize: "16px",
    messageLineHeight: "24px",
    position: "topRight",
    transitionIn: "fadeInLeft",
    backgroundColor: "#59A10D",
    progressBarColor: "#B5EA7C",
    title:"Ok",
    titleColor:"#FFF",
    titleSize:"16px",
    titleLineHeight: "24px",
    timeout: 5000,
    iconUrl: "./img/success-icon.svg",
    theme: "dark",
    })
}
const snackbarForm = document.querySelector(".form")
const delayInput = document.querySelector(".delay-input")

snackbarForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const state = document.querySelector("input[name='state']:checked");
    const timeout = delayInput.value
    setTimeout(() => {
        const promise = new Promise((res, rej) => {
            if (state.value === "fulfilled") {
                res(`Fulfilled promise in ${timeout}ms`)
            } else {
                rej(`Rejected promise in ${timeout}ms`)
            }
        });
        promise
            .then(value => {
            getSuccess(value)
            })
            .catch(value => {
            getError(value)
            })
            
    }, timeout);
    snackbarForm.reset();
})