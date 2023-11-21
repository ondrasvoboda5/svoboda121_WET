const wrapper = document.querySelector(".wrapper");

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255); //zvolení barvy z rgb
let b = Math.floor(Math.random() * 255);

for (let i = 0; i < 6; i++) {

    let novyDiv = document.createElement("div"); //vytvoří nový div

    novyDiv.classList.add("square"); //přiřazení classy

    novyDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // obarvení pozadí

    wrapper.appendChild(novyDiv); //přidání divu do divu wrapper
}
