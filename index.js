let tully = document.getElementById("tullybutton")
let tyler = document.getElementById("tylerbutton")
let riley = document.getElementById("rileybutton")
let random = document.getElementById("randombutton")
let tullyCount = document.getElementById("tullybox")
let tylerCount = document.getElementById("tylerbox")
let rileyCount = document.getElementById("rileybox")
let randomCount = document.getElementById("randombox")

let tullyCounter = 0
let tylerCounter = 0
let rileyCounter = 0
let randomCounter = 0
const killCounts = [tullyCounter, tylerCounter, rileyCounter, randomCounter]
tullyCount.textContent = JSON.parse(localStorage.getItem('tullyKills'));
tylerCount.textContent = JSON.parse(localStorage.getItem('tylerKills'));
rileyCount.textContent = JSON.parse(localStorage.getItem('rileyKills'));
randomCount.textContent = JSON.parse(localStorage.getItem('randomKills'));
function alarm() {
    alert("Why did you do it man? You're better than this. This bloodshed is needless.")
}
alarm()

tully.addEventListener("click", function() {
let tullyCounter = JSON.parse(localStorage.getItem('tullyKills'));
tullyCounter += 1; 
   tullyCount.textContent = tullyCounter
   localStorage.setItem('tullyKills', JSON.stringify(tullyCounter));
});
tyler.addEventListener("click", function() {
let tylerCounter = JSON.parse(localStorage.getItem('tylerKills',));
  tylerCounter += 1; 
  tylerCount.textContent = tylerCounter
   localStorage.setItem('tylerKills', JSON.stringify(tylerCounter));
});
riley.addEventListener("click", function() {
   let rileyCounter = JSON.parse(localStorage.getItem('rileyKills',));
  rileyCounter += 1; 
    rileyCount.textContent = rileyCounter
   localStorage.setItem('rileyKills', JSON.stringify(rileyCounter));
});
random.addEventListener("click", function() {
let randomCounter = JSON.parse(localStorage.getItem('randomKills',));
 randomCounter += 1 ; 
    randomCount.textContent = randomCounter
   localStorage.setItem('randomKills', JSON.stringify(randomCounter));
});
function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }


  
