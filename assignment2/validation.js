// Full Name Validation
document.getElementById("fname").required = true;
document.getElementById("uname").required = true;
document.getElementById("pass").required = true;
document.getElementById("cpass").required = true;
document.getElementById("phone").required = true;
document.getElementById("email").required = true;
document.getElementById("state").required = true;
document.getElementById("agreement").required = true;

var fname= document.getElementById("fname");

var fnameValidation=function(){

   fnameValue=fname.value; 
   validfname=/^[A-Z a-z]+$/;
   fnameErr=document.getElementById('fname-val');

   if(fnameValue=="")
   {
    fnameErr.innerHTML="* First Name is required!!";

   }else if(!validfname.test(fnameValue)){
     fnameErr.innerHTML="* First Name must be only string!!";
   }else{
     fnameErr.innerHTML="";
     return true;
    
   }
}

fname.oninput=function(){
   
   fnameValidation();
}

// Username Validation
var uname= document.getElementById("uname");

var unameValidation=function(){

   unameValue=uname.value; 
   validuname=/^[0-9a-zA-Z]+$/;
   unameErr=document.getElementById('uname-val');

   if(unameValue=="")
   {
    unameErr.innerHTML="* Username is required!!";

   }else if(!validuname.test(unameValue)){
     unameErr.innerHTML="* Username must only be Alphanumeric!!";
   }else{
     unameErr.innerHTML="";
     return true;
    
   }
}

uname.oninput=function(){
   
   unameValidation();
}


//Password Validation

var pass= document.getElementById("pass");

var passValidation=function(){

   passValue=pass.value; 
   validpass=/^[A-Za-z0-9_@./#&+-]*$/;
   passErr=document.getElementById('pass-val');

   if(passValue=="")
   {
    passErr.innerHTML="* Password is required!!";

   }else if(!validpass.test(passValue)){
     passErr.innerHTML="* Password cannot contain space!!";
     
   }else{
     passErr.innerHTML="";
     
     if(passValue.length > 5 && passValue.length < 11){
        passErr.innerHTML="* Strong Password!!";
        return true;
       }
       else if(passValue.length <= 5){
        passErr.innerHTML="* Password too short!!";
        return false;
   }
   else{
    passErr.innerHTML="* Password too long!!";
        return false;
   }
       }
       
   
}

pass.oninput=function(){
   
   passValidation();
   
}


//Password Match Validation

var pass2 = document.getElementById('cpass').value;
cpassErr=document.getElementById('cpass-val');
if(pass === pass2){
    cpassErr.innerHTML="* Both Passwords matched!!";
}


//Phone Number Validation

var phone= document.getElementById("phone");

var phoneValidation=function(){

   phoneValue=phone.value; 
   validphone=/^[0-9]*$/;
   phoneErr=document.getElementById('phone-val');

   if(phoneValue=="")
   {
    phoneErr.innerHTML="* Phone Number is required!!";

   }else if(!validphone.test(phoneValue)){
     phoneErr.innerHTML="* Phone Number contains digits only!!";
     
   }else{
     phoneErr.innerHTML="";
     
     if(phoneValue.length > 10 || phoneValue.length < 10){
        phoneErr.innerHTML="* Invalid Phone Number. Phone Number contains 10 digits!!";
        return false;
       }
       else{
        return false;
   }
       }
       
   
}

phone.oninput=function(){
   
   phoneValidation();
   
}

