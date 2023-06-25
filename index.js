import formatInput from "./format.js";

const updateInput = (e) => {
  const inputElement = document.getElementById("phone-input");

  const formattedPhone = formatInput(e.target.value);

  inputElement.value = formattedPhone ? formattedPhone : "";
};

document.getElementById("phone-input").addEventListener("input", updateInput);
