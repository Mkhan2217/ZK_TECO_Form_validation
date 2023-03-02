console.log("form validation");
function formvali(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var contact=document.getElementById("contact").value;
    var password=document.getElementById("password").value;

    var fnamecheck=/^[A-Za-z]{3,30}$/;
    var lnamecheck=/^[A-Za-z]{3,30}$/;
    var emailcheck= /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@"+ "[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    var contactcheck=/^[789][0-9]{9}$/;
    var passwordcheck=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9]{8,16}$/;

    if (fnamecheck.test(fname)) {
        document.getElementById("fnameRR").innerHTML=" ";
        
    } else {
        document.getElementById("fnameRR").innerHTML=" ** fname is inavlid **";
         
    }
    if (lnamecheck.test(lname)) {
        document.getElementById("lnameRR").innerHTML=" ";
        
    } else {
        document.getElementById("lnameRR").innerHTML=" ** lname is inavlid** ";
    }
    if (emailcheck.test(email)) {
        document.getElementById("emailRR").innerHTML=" ";
        
    } else {
        document.getElementById("emailRR").innerHTML=" ** Email is inavlid **";
    }
    if (contactcheck.test(contact)) {
        document.getElementById("contactRR").innerHTML=" ";
        
    } else {
        document.getElementById("contactRR").innerHTML=" ** contact is inavlid** ";
    }
    if (passwordcheck.test(password)) {
        document.getElementById("passwordRR").innerHTML=" ";
        
    } else {
        document.getElementById("passwordRR").innerHTML=" ** password is inavlid **";
    }




}
