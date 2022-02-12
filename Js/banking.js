// Take input fields and convert into numbers

function getInputValue(givenId) {

    const inputField = document.getElementById(givenId);
    const inputFieldValueStr = inputField.value;
    const inputFieldValueNum = parseFloat(inputFieldValueStr);
    inputField.value = '';

    return inputFieldValueNum;
}

// Take innerTexts and convert into numbers 

function getInnerTextValueInNum(givenId) {
    const targetElement = document.getElementById(givenId);
    const targetElementInnerText = targetElement.innerText;
    const textToNum = parseFloat(targetElementInnerText);

    return textToNum;
}

// Total amount update function of deposit and withdraw 

function totalUpdate(givenId, previousTotal, currentTx) {
    const displayTotalAmount = document.getElementById(givenId);
    const newTotalAmount = previousTotal + currentTx;
    displayTotalAmount.innerText = newTotalAmount;
}


// Available Balance update function
function updateBalance(givenId, currentDeposit, withdrawInput) {
    const displayBalance = document.getElementById('total-balance');
    const previousBalance = getInnerTextValueInNum('total-balance');
    if (givenId == 'total-deposit') {
        const currentBalance = previousBalance + currentDeposit;
        displayBalance.innerText = currentBalance;
    }
    else if (givenId == 'total-withdrawn') {
        const currentBalance = previousBalance - withdrawInput;
        displayBalance.innerText = currentBalance;
    }
}


// Deposit portion

document.getElementById('deposit-btn').addEventListener('click', function () {

    const currentDeposit = getInputValue('deposit-input');

    const previousDeposit = getInnerTextValueInNum('total-deposit');

    // Update Deposit Amount
    totalUpdate('total-deposit', previousDeposit, currentDeposit);

    // Update Balance
    updateBalance('total-deposit', currentDeposit);
})


// Withdraw Portion

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const currentWithdraw = getInputValue('withdraw-input');

    const previousTotalWithdrawn = getInnerTextValueInNum('total-withdrawn');

    // Update Withdrawn Amount
    totalUpdate('total-withdrawn', previousTotalWithdrawn, currentWithdraw);

    // Update Balance  
    updateBalance('total-withdrawn', null, currentWithdraw);
})