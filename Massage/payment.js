const form = document.getElementById("paymentForm");
const paymentSection = document.getElementById("paymentSection");
const verifyBtn = document.getElementById("verifyBtn");
const verification = document.getElementById("verification");
const countdown = document.getElementById("countdown");
const success = document.getElementById("success");

form.addEventListener("submit", function(e){

e.preventDefault();

const customer = {

fullname: document.getElementById("fullname").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
amount: document.getElementById("amount").value,
date: new Date().toLocaleString()

};

// Save customer information
localStorage.setItem("paymentDetails", JSON.stringify(customer));

form.style.display="none";
paymentSection.classList.remove("hidden");

});

verifyBtn.addEventListener("click", function(){

paymentSection.classList.add("hidden");
verification.classList.remove("hidden");

let time = 30;

countdown.innerText = time;

const timer = setInterval(function(){

time--;

countdown.innerText = time;

if(time <= 0){

clearInterval(timer);

verification.classList.add("hidden");

success.classList.remove("hidden");

}

},1000);

});