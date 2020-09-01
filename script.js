"use strict";

const showOutputButton = document.querySelector("#showOutput");
showOutputButton.addEventListener("click", processInput);

function processInput() {
  let inputValue = document.querySelector("#inputBox").value;
  const dropdownSelect = document.querySelector("#dropdownChoice");

  dropdownSelect.addEventListener("change", checkSelectedOption);

  function checkSelectedOption() {
    return dropdownSelect.value;
  }
  switch (checkSelectedOption()) {
    case "firstCharUppercase":
      console.log("first");
      break;
    case "findFirstName":
      console.log("second");
      break;
    case "nameLength":
      console.log("third");
      break;
    case "middleName":
      console.log("fourth");
      break;
    case "fileExtension":
      console.log("fifth");
      break;
    case "password":
      console.log("sixth");
      break;
    case "thirdCharUppercase":
      console.log("seventh");
      break;
    case "spaceCharUppercase":
      console.log("eighth");
      break;
  }
}
