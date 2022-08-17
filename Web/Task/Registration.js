function validate(){
    var name = document.getElementById("fname").value;
    var name1 = document.getElementById("lname").value;
    let pass = document.getElementById("pass1").value;
    let pass1 = document.getElementById("pass2").value;
    let age = document.getElementById("age").value;
    let date = new Date();
    let minlength = 5;
    let maxlength = 20;
    
   if(name==""|| name==null && name1=="" || name1==null){
        alert("Name must be filled!");
    }
  else if(name.length<minlength||name.length>maxlength){
        alert("Name must contain min 5 and max 20 chr");
    } 
   
    else if(pass==null||pass==""){
        alert("Type password");
    }
    else if(pass1==null||pass1==""){
        alert("Re-type password");
    }
  else if(pass!=pass1){
        alert("password must be same!");
    }
}
function emailValidate(){
    let x = document.getElementById("mail").value;
    let dotposition = x.lastIndexOf(".");
    let atposition = indexOf("@");
     if(atposition<1 || dotposition<atposition + 3 || dotposition+2>x.length){
        alert("Please enter a valid mail!");
     }
}

function focus(){
    document.getElementsByClassName("inputfield").style.backgroundColor=red;
}
function myReset(){
    document.getElementById("register").reset();
}