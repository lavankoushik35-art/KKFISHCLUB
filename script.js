// Welcome message
console.log("Welcome to KK FISH CLUB");

// Button animation
document.querySelectorAll("button").forEach(btn=>{
btn.addEventListener("click",()=>{
btn.style.transform="scale(0.95)";
setTimeout(()=>{
btn.style.transform="scale(1)";
},150);
});
});
