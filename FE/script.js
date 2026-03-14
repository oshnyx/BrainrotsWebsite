const form = document.querySelector("#myForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const fullname = document.querySelector("#fullname").value.trim();
const email = document.querySelector("#email").value.trim();
const phone = document.querySelector("#phone").value.trim();
const subject = document.querySelector("#subject").value.trim();
const message = document.querySelector("#message").value.trim();

if(fullname.length < 3){
alert("Full name must contain at least 3 characters");
return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
alert("Invalid email address");
return;
}

const phonePattern = /^[0-9]{10,}$/;

if(!phonePattern.test(phone)){
alert("Phone number must contain at least 10 digits");
return;
}

if(subject.length < 5){
alert("Subject must contain at least 5 characters");
return;
}

if(message.length < 10){
alert("Message must contain at least 10 characters");
return;
}

alert("Message sent successfully!");

form.reset();

});