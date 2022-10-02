document.getElementById('btn-deposit').addEventListener('click', () => {
    const depositFieldInt = getIntFromInput('deposit-field')
    if(isNaN(depositFieldInt)){
        alert("Please enter an integer...")
        return;
    }
    
    const previousDepositTotalInt = getIntFromTextElement('deposit-total')


    const depositCurrent = previousDepositTotalInt + depositFieldInt;
    const setCurrentDeposit = setTextElementByID('deposit-total', depositCurrent);

    
    const previousBalanceTotal = getIntFromTextElement('balance-total');
    const balanceCurrent = previousBalanceTotal + depositFieldInt;
    const currentBalance = setTextElementByID('balance-total', balanceCurrent);
});