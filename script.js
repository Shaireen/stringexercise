"use strict";

const showOutputButton = document.querySelector("#showOutput");
showOutputButton.addEventListener("click", processInput);

function processInput() {
  let inputValue = document.querySelector("#inputBox").value;
  const dropdownSelect = document.querySelector("#dropdownChoice");
  let outputValue;
  const outputBox = document.querySelector("#outputBox");
  outputBox.textContent = "";
  dropdownSelect.addEventListener("change", checkSelectedOption);
  const splitFullname = inputValue.split(" ");
  function checkSelectedOption() {
    return dropdownSelect.value;
  }
  switch (checkSelectedOption()) {
    case "firstCharUppercase":
      inputValue = inputValue.toLowerCase();
      function capitalize() {
        return inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
      }
      outputValue = capitalize();
      break;
    case "findFirstName":
      outputValue = splitFullname[0];
      break;
    case "nameLength":
      outputValue = splitFullname[0].length;
      break;
    case "middleName":
      outputValue =
        (inputValue.indexOf(" ") + 1).toString() +
        ", " +
        (inputValue.lastIndexOf(" ") - 1).toString() +
        ", " +
        splitFullname[1];
      console.log("fourth");
      break;
    case "fileExtension":
      if (inputValue.endsWith(".jpg")) {
        outputValue = "File name is .jpg";
      } else if (inputValue.endsWith(".png")) {
        outputValue = "File name is .png";
      } else {
        outputValue = "other file extension";
      }
      break;
    case "password":
      let i = 0;
      outputValue = "";
      for (i = 0; i < inputValue.length; i++) {
        outputValue += "*";
      }
      break;
    case "thirdCharUppercase":
      function capitalizeThird() {
        return (
          inputValue.slice(0, 2) +
          inputValue.charAt(2).toUpperCase() +
          inputValue.slice(3)
        );
      }
      outputValue = capitalizeThird();
      break;
    case "spaceCharUppercase":
      let splitHyphens = inputValue.split("-");
      let hyphenPosition = inputValue.indexOf("-");
      let spacePosition = inputValue.indexOf(" ");
      outputValue = "";
      console.log(splitFullname);
      let j = 0;
      if (spacePosition > 0) {
        for (j = 0; j < splitFullname.length; j++) {
          outputValue +=
            splitFullname[j].charAt(0).toUpperCase() +
            splitFullname[j].slice(1) +
            " ";
        }
      } else if (hyphenPosition > 0) {
        for (j = 0; j < splitHyphens.length; j++) {
          outputValue +=
            splitHyphens[j].charAt(0).toUpperCase() +
            splitHyphens[j].slice(1) +
            "-";
        }
        outputValue = outputValue.slice(0, outputValue.length - 1);
      }
      console.log(outputValue);
      break;
  }
  outputBox.textContent = outputValue;
}
