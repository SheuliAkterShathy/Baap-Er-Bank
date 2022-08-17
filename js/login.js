document.getElementById('submit-btn').addEventListener('click',function(){

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // DANGER: DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT CITE
    if(email === 'sontan@baap.com' && password ==='secret'){
      window.location.href='bank.html'
    }

    else{
        alert('Please enter your correct email and password.')
    }
})