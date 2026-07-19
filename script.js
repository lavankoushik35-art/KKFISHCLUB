// ===============================
// KK FISH CLUB
// script.js
// ===============================

// Welcome
console.log("Welcome to KK FISH CLUB");

// Button click animation
document.querySelectorAll("button").forEach(button=>{
button.addEventListener("click",()=>{
button.style.transform="scale(0.95)";
setTimeout(()=>{
button.style.transform="scale(1)";
},150);
});
});

// Confirmation Codes
const validCodes=[
"KKFISHGDK",
"KKFISHHEAVEN",
"KKAQUA",
"KKAQUARIUMS",
"GDKHEAVENFISHES"
];

// Check Confirmation Code
function checkCode(){

const code=document.getElementById("code");

if(!code) return;

if(validCodes.includes(code.value.toUpperCase
