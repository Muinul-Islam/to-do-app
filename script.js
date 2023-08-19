let inputs = document.getElementById("inp");
let textField = document.getElementById("text-field");

function add() {
  if (inputs.value === "") {
    alert("Enter Your Task");
  } else if (textField.children.length >= 15) {
    alert("You Can't Add More Task");
  } else {
    const newElement = document.createElement("li");
    // newElement.innerText = inputs.value;

    // textField.appendChild(newElement);

    newElement.innerHTML = `${inputs.value} <i class="relative left-2 pointer fa-solid fa-trash"></i>`;

    textField.appendChild(newElement);
    inputs.value = " ";

    newElement.querySelector("i").addEventListener("click", function () {
      newElement.remove();
    });
  }
}
