// console.log("home file connected");
const pin = 1234;

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    //Step 1: get the written value in input form
    const bank = document.getElementById("bank-name").value;
    const accountNumber = document.getElementById("account-number").value;
    const addMoneyValue = parseInt(document.getElementById("add-money").value);
    const pinNumberValue = parseInt(document.getElementById("add-pin").value);

    //Step 2: get the available balance from the span tag
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    //Step 3: Check the condition:
    if (accountNumber.length < 11) {
      alert("Please give valid account number");
      return;
    }
    if (pin !== pinNumberValue) {
      alert("Please give valid pin number");
      return;
    }

    // Step 4: calculate & update the available balance;
    const currentTotalBalance = availableBalance + addMoneyValue;

    document.getElementById("available-balance").innerText =
      currentTotalBalance;
  });
