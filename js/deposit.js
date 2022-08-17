document.getElementById('deposit-btn').addEventListener('click',function(){

   const depositField=document.getElementById('deposit-field');
   const newDepositAmountString =depositField.value;
   const newDepositAmount = parseFloat(newDepositAmountString);

   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositAmountString = depositTotalElement.innerText;
   const previousDepositAmount = parseFloat(previousDepositAmountString);


   const currentDepositAmount = previousDepositAmount+newDepositAmount;

   depositTotalElement.innerText = currentDepositAmount;

   
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceAmountString = balanceTotalElement.innerText;
   const previousBalanceAmount = parseFloat(previousBalanceAmountString);

   const totalBalance = previousBalanceAmount+newDepositAmount;
   balanceTotalElement.innerText=totalBalance;

  depositField.value = '';
})



