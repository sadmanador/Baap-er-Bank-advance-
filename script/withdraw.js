document.getElementById('btn-withdraw').addEventListener('click', () => {
    const withdrawAmount = getIntFromInput('withdraw-field')
    if(isNaN(withdrawAmount)){
        alert("Please enter an integer...")
        return;
    }
    const preBalanceTotal = getIntFromTextElement('balance-total');

    if(withdrawAmount > preBalanceTotal){
        alert('The withdrawal must be smaller than the current balance')
        return;
    }
    
    const previousWithdraw = getIntFromTextElement('withdraw-total');

    const withdrawCurrent = previousWithdraw + withdrawAmount;
    const setCurrentWithdraw = setTextElementByID('withdraw-total', withdrawCurrent);

    const currentBalance = preBalanceTotal - withdrawAmount;
    const currentBalanceAfterWithdraw = setTextElementByID('balance-total', currentBalance);
});