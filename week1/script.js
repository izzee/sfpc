const daysLate = document.querySelector('#days-late')

function randomDays() {
  const randomNum = Math.floor(Math.random() * 10000000);  
  daysLate.innerText = String(randomNum).padStart(7, '0');
}

window.setInterval(randomDays, 10);