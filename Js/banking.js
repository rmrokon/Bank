function getInputValue(givenId) {

    const inputField = document.getElementById(givenId);
    const inputFieldValueStr = inputField.value;
    const inputFieldValueNum = parseFloat(inputFieldValueStr);
    inputField.value = '';

    // const depositInput = document.getElementById('deposit-input');
    // const currentDepositStr = depositInput.value;
    // depositInput.value = '';
    return inputFieldValueNum;
}

function getInnerTextValueInNum(givenId) {
    const targetElement = document.getElementById(givenId);
    const targetElementInnerText = targetElement.innerText;
    const textToNum = parseFloat(targetElementInnerText);
    return textToNum;
}

function updateBalance(givenId, currentDeposit, withdrawInput) {

    const previousBalance = getInnerTextValueInNum('total-balance');
    if (givenId == 'total-deposit') {
        const currentBalance = previousBalance + currentDeposit;
        return currentBalance;
    }
    else if (givenId == 'total-withdrawn') {
        const currentBalance = previousBalance - withdrawInput;
        return currentBalance;
    }


    // const targetElement = document.getElementById(givenId);
    // const previousBalance = getInnerTextValueInNum('total-balance');
    // if (targetElement == document.getElementById('total-deposit')) {
    //     const currentBalance = previousBalance + currentDeposit;
    //     return currentBalance;
    // }
    // else if (targetElement == document.getElementById('total-withdrawn')) {
    //     const currentBalance = previousBalance - withdrawInput;
    //     return currentBalance;
    // }
}


document.getElementById('deposit-btn').addEventListener('click', function () {

    const currentDeposit = getInputValue('deposit-input');
    // get current deposit

    const previousDeposit = getInnerTextValueInNum('total-deposit');

    let totalDeposit = currentDeposit + previousDeposit;
    const displayDeposit = document.getElementById('total-deposit');
    displayDeposit.innerText = totalDeposit;

    // Update Balance
    const displayBalance = document.getElementById('total-balance');
    const updatedBalanceAfterDeposit = updateBalance('total-deposit', currentDeposit);
    console.log(updatedBalanceAfterDeposit);
    displayBalance.innerText = updatedBalanceAfterDeposit;

})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = getInputValue('withdraw-input');

    const previousTotalWithdrawn = getInnerTextValueInNum('total-withdrawn');

    const displayWithdrawn = document.getElementById('total-withdrawn');

    const totalWithdrawn = withdrawInput + previousTotalWithdrawn;

    displayWithdrawn.innerText = totalWithdrawn;

    // Update Balance
    const displayBalance = document.getElementById('total-balance');
    const updatedBalanceAfterWithdraw = updateBalance('total-withdrawn', null, withdrawInput);
    displayBalance.innerText = updatedBalanceAfterWithdraw;

})