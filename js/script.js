// console.log("external script js file connected");
document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();

  //step 1: get written number value in the input form :
  const inputNumberStr = document.getElementById("input-number").value;
  const inputNumberValue = parseInt(inputNumberStr); //converted into number;

  //get written pin value in the input form:
  const inputPinStr = document.getElementById("input-pin").value;
  const inputPinValue = parseInt(inputPinStr);

  //step 2: set demo number & pin:
  const requireNumber = 12345678910;
  const requirePin = 1234;

  //step 3: check the condition weather it's true or not:
  if (inputNumberValue === requireNumber && inputPinValue === requirePin) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid credentials");
  }
});
