username_validation = () =>{
    var id = document.signup.username
    var id_len = id.value.length;
    var regid = /^[A-Za-z][A-Za-z0-9@#$]*\.[A-Za-z]+$/gi;
    
     if (id_len == 0) 
        {
            document.getElementsByClassName("user")[0].innerHTML = "id should not be empty"; id.focus();
            return false;
        }
        else if (id_len > 30) 
            {
                document.getElementsByClassName("user")[0].innerHTML = "length is exceeding"; id.focus();
                return false;
            }
            
        else if(!id.value.match(regid)){
            document.getElementsByClassName("user")[0].innerHTML = "id is not in requried format";id.focus();
            return false;
        }    
            else {
                document.getElementsByClassName("user")[0].innerHTML = "";
              return true;
              
            }
        
        }
password_validation = () =>{
    var password = document.signup.password;
    var pass_len = password.value.length;
    var passformat = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]+$/;
    if (pass_len== 0) 
        {
            document.getElementsByClassName("pass")[0].innerHTML = "password should not be empty"; password.focus();
            
            return false;
        }
        else if (pass_len > 22) 
            {
                document.getElementsByClassName("pass")[0].innerHTML = "length  between 5 to 12"; password.focus();
                return false;
            }
            
        else if(!password.value.match(passformat)){
            document.getElementsByClassName("pass")[0].innerHTML = "password is not in requried format";password.focus();
            return false;
        }    
            else {
                document.getElementsByClassName("pass")[0].innerHTML = "";
                return true;
            
            }
}

 validateAddress = ()=> {
    var address = document.signup.address; 
    var address_len = address.value.length; 

    if (address_len === 0)
    {
        document.getElementById("addressid").innerHTML = "Address should not be empty";
        address.focus(); 
        return false;
    } 
    else 
    {
        document.getElementById("addressid").innerHTML = "";
        return true;
    }
}
Phonenumber = ()=>{
    var phonenumber = document.signup.phonenumber;
    var phno_len = phonenumber.value.length;
    if(phno_len===0)
    {
        document.getElementsByClassName("phno")[0].innerHTML = "phone number should not be empty";phonenumber.focus();
        return false;
    }
    else if (phno_len>=10)
    {
       document.getElementsByClassName("phno")[0].innerHTML ="phone number length should not exceed more than 10 digits";
    }
    else
    {
        document.getElementsByClassName("phno")[0].innerHTML ="";
        return true;
    }
}

var generatedOtp="";
var otpGenerated = false;

generateOtp = () => Math.floor(1000 + Math.random() * 9000); 

verifyOtp = () => {
   if (!otpGenerated) 
    {
       generatedOtp = generateOtp(); 
       otpGenerated = true;
       document.getElementsByClassName("otpsent")[0].innerText = "OTP SENT";
       console.log("Generated OTP: " + generatedOtp);
    } 
   else 
      {
       var inputOtp = document.getElementById("otp").value;

       
       if (parseInt(inputOtp) === generatedOtp)
        {
           document.getElementsByClassName("otpsent")[0].innerText = "OTP verified";
           
        } 
        else 
        {
           document.getElementsByClassName("otpsent")[0].innerText = "Please enter the correct OTP";
           
        }
   }
}
storeData = ()=>
    {
    if(username_validation() && password_validation() && validateAddress() && Phonenumber()) 
    {
      var id = document.signup.username.value;
      var password = document.signup.password.value;
      localStorage.setItem("username", id);
      localStorage.setItem("password", password);
      alert("Data stored successfully to lalaland!")
    }
    else
    {
      alert("data was not sufficent to join lalaland");
    }
}
loginValidation = () => 
{
    var enteredUsername = document.querySelector('input[name="username"]').value;
    var enteredPassword = document.querySelector('input[name="password"]').value;

    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (enteredUsername === storedUsername && enteredPassword === storedPassword)
    {
        alert("Login successful!");
        return true;
    } 
    else 
    {
        alert("Invalid username or password.");
        return false; 
    }
}
forgotpassworduseridvalidation = () => {
    var forgotpasswordusername = document.querySelector('input[name="forgotusername"]').value;
    var storedforgotpasswordusername = localStorage.getItem("username");
     
    if (forgotpasswordusername === storedforgotpasswordusername) 
        {
        document.getElementById("forgotpassworduser").innerText = "OTP sent to your email";
     
        return false;
    } else {
        document.getElementById("forgotpassworduser").innerText = "Please enter the correct userid.";
        return false;
    }
}