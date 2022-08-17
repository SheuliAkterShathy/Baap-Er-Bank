document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmountString =withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
      alert('Please provide a valid number.');
      return;
    }
   

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);


   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceAmountString = balanceTotalElement.innerText;
   const previousBalanceAmount = parseFloat(previousBalanceAmountString);
   
   if(newWithdrawAmount>previousBalanceAmount){
    alert('You have no sufficient balance.Please provide correct balance');
    return;
   }
    const currentWithdrawAmount = previousWithdrawAmount+newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawAmount;

   const totalBalance = previousBalanceAmount - newWithdrawAmount;
   balanceTotalElement.innerText = totalBalance;

})



 
