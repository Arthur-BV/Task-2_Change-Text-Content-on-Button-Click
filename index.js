const newText = document.querySelector("#newText");
const textArea = document.querySelector("#textArea");
const changeButton = document.querySelector("#changeButton");

changeButton.addEventListener("click", function () {
    textArea.textContent = newText.value;
});
