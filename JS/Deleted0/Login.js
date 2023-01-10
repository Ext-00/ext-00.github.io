function login(){
    var uname = document.loginform.uname.value;
    var psw = document.loginform.psw.value;
    if((user == "rohit" || user == "ROHIT") && pass == "23"){
        document.loginform.submit();
  }else{
       alert("Please Enter Correct Credentials");
}
     }
