// JavaScript Document
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () => {
	slider.scrollLeft -= 1000
})

next.addEventListener('click', () => {
	slider.scrollLeft += 1000
})


const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
	nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
	nav.classList.remove("visible");
})