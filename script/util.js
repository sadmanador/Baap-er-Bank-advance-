function getIntFromInput(inputField) {
    const getInputField = document.getElementById(inputField);
    const getInputFieldString = getInputField.value;
    const getInputFieldInt = parseFloat(getInputFieldString);
    getInputField.value = '';
    return getInputFieldInt;
};

function getIntFromTextElement(textElement) {
    const getTextElement = document.getElementById(textElement);
    const getTextElementString = getTextElement.innerText;
    const getTextElementInt = parseFloat(getTextElementString);
    return getTextElementInt;
};

function setTextElementByID(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
