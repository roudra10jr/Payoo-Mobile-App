// function to get number value from input-field:
function getInputValueNumber(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseInt(inputValue);
  return inputValueNumber;
}
function getInputValue(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}
// function to get innerText :
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}
// function to set innerText :
function setInnerText(value) {
  const element = document.getElementById("available-balance");
  element.innerText = value;
  return element;
}

// handle toggle:
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to get toggle btn style:
function handleToggleBtnStyle(id) {
  const formsBtn = document.getElementsByClassName("card-btn");
  for (const formBtn of formsBtn) {
    formBtn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    formBtn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

const requirePin = 1234;
const transactionData = [];

// add money:
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    //Step 1: get the written value in input form
    const bank = getInputValue("bank-name");
    const accountNumber = getInputValue("account-number");
    const addMoneyValue = getInputValueNumber("add-money");
    const pinNumberValue = getInputValueNumber("add-pin");

    //Step 2: get the available balance from the span tag
    const availableBalance = getInnerText("available-balance");

    //Step 3: Check the condition:
    if (addMoneyValue <= 0) {
      alert("Invalid Amount");
      return;
    }
    if (accountNumber.length < 11) {
      alert("Please give valid account number");
      return;
    }
    if (requirePin !== pinNumberValue) {
      alert("Please give valid pin number");
      return;
    }

    // Step 4: calculate & update the available balance;
    const currentTotalBalance = availableBalance + addMoneyValue;

    setInnerText(currentTotalBalance);

    // for transaction history
    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
    // console.log(transactionData);
  });

// withdraw Money:
document.getElementById("btn-withdraw").addEventListener("click", function (e) {
  e.preventDefault();
  const agentNumber = getInputValue("agent-number");
  const withdrawAmount = getInputValueNumber("withdraw-amount");

  //Step 2: get the available balance from the span tag
  const availableBalance = getInnerText("available-balance");
  const pinNumber = getInputValueNumber("pin");

  //check the condition:
  if (agentNumber.length < 11) {
    alert("Please give valid number");
    return;
  }
  if (withdrawAmount <= 0) {
    alert("Invalid Amount");
    return;
  }
  if (requirePin !== pinNumber) {
    alert("please give correct 4 digit pin");
    return;
  }
  if (availableBalance < withdrawAmount) {
    alert("Insufficient Money. Please add money.");
    return;
  }

  //calculate & update the available balance;
  const currentTotalBalance = availableBalance - withdrawAmount;
  setInnerText(currentTotalBalance);

  // for transaction history
  const data = {
    name: "Withdraw",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  // console.log(transactionData);
});

// Transfer Money:
document.getElementById("btn-transfer").addEventListener("click", function (e) {
  e.preventDefault();
  const numberValue = getInputValue("transfer-number");
  const transferValueNum = getInputValueNumber("transfer-amount");
  const pinNumber = getInputValueNumber("pin-transfer");

  const availableBalance = getInnerText("available-balance");

  if (numberValue.length < 11 || pinNumber !== requirePin) {
    alert("Invalid number or pin");
    return;
  }
  if (transferValueNum <= 0) {
    alert("Invalid");
    return;
  }
  const currentTotalBalance = availableBalance - transferValueNum;
  setInnerText(currentTotalBalance);

  // for transaction history
  const data = {
    name: "Transfer Money",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  // console.log(transactionData);
});

// pay money:
document.getElementById("pay-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const selectBill = getInputValue("payment-name");
  const billerNumber = getInputValue("biller-number");
  const billAmount = getInputValueNumber("pay-money");
  const pinNumber = getInputValueNumber("add-pin-pay");
  const availableBalance = getInnerText("available-balance");

  if (billerNumber.length < 11 || pinNumber !== requirePin) {
    alert("Invalid number or pin!");
    return;
  }
  if (billAmount <= 0) {
    alert("Invalid Amount");
  }
  if (billAmount > availableBalance) {
    alert("You have insufficient balance to pay bill");
    return;
  }
  const currentTotalBalance = availableBalance - billAmount;
  setInnerText(currentTotalBalance);

  // for transaction history
  const data = {
    name: "Pay Bill",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  // console.log(transactionData);
});

// transaction:

document
  .getElementById("transaction-history-card-btn")
  .addEventListener("click", function () {
    // console.log("clicked transaction btn");

    const transactionCardContainer = document.getElementById(
      "transaction-card-container"
    );
    transactionCardContainer.innerText = "";
    // transactionCardContainer.innerText = "";
    console.log(transactionData);

    for (const data of transactionData) {
      const ChildDiv = document.createElement("div");
      ChildDiv.innerHTML = `
      <div
						class="bg-white rounded-xl p-3 flex justify-between items-center mt-2"
					>
						<div class="flex items-center">
							<div class="p-2 rounded-full bg-[#f4f5f7]">
								<img src="./assets/wallet1.png" class="mx-auto" alt="" />
							</div>
							<div class="ml-3">
								<h3 class="font-bold">${data.name}</h3>
								<p class="text-[#08080880]">${data.date}</p>
							</div>
						</div>
						<i class="fa-solid fa-ellipsis-vertical"></i>
					</div>
      `;
      transactionCardContainer.appendChild(ChildDiv);
    }
  });

//toggling :

document
  .getElementById("add-money-card-btn")
  .addEventListener("click", function () {
    handleToggle("add-money-form");
    handleToggleBtnStyle("add-money-card-btn");
  });

document
  .getElementById("cashout-money-card-btn")
  .addEventListener("click", function () {
    handleToggle("cash-out-form");
    handleToggleBtnStyle("cashout-money-card-btn");
  });

document
  .getElementById("transfer-money-card-btn")
  .addEventListener("click", function () {
    handleToggle("transfer-money-form");
    handleToggleBtnStyle("transfer-money-card-btn");
  });

document
  .getElementById("get-bonus-card-btn")
  .addEventListener("click", function () {
    handleToggle("coupon-form");
    handleToggleBtnStyle("get-bonus-card-btn");
  });

document
  .getElementById("pay-bill-card-btn")
  .addEventListener("click", function () {
    handleToggle("pay-bill-form");
    handleToggleBtnStyle("pay-bill-card-btn");
  });
document
  .getElementById("transaction-history-card-btn")
  .addEventListener("click", function () {
    handleToggle("transaction-history-form");
    handleToggleBtnStyle("transaction-history-card-btn");
  });
