let tlacitko = document.querySelector("#tlacitko")
let tlacitko2 = document.querySelector("#tlacitko2")
let nadpis = document.querySelector("#nadpis")
let nadpis2 = document.querySelector("#nadpis2")
let mario = document.querySelector("mario")
let kostky = document.querySelector("kostky")
let div1 = document.querySelector("div1")
let div2 = document.querySelector("div2")

tlacitko.addEventListener("click", zmenNadpis)
kostky.addEventListener("click", zmenStranku)
mario.addEventListener("click", zmenStranku1) 

function zmenNadpis () {
    nadpis.innerText = "Hahahahahahahahahahahaha"
}

function zmenStranku () {
    div1.style.display  = "none"
    kostky.style.display = "none"
    mario.style.display = "inline"
    div2.style.display = "block"
    
}
function zmenStranku1 () {
    div2.style.display= "none"
    div1.style.display = "inline"
}