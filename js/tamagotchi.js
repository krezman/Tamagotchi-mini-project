let load = document.addEventListener("DOMContentLoaded", () => {



let hungerNumber = document.querySelector("#hungerNumber")
let sleepNumber = document.querySelector("#sleepNumber")
let boredomNumber = document.querySelector("#boredomNumber")
let ageNumber = document.querySelector("#ageNumber")




class Pet {
  constructor (name) {
    this.name = name
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0
   setInterval( () => {
    this.hunger += 1
    hungerNumber.innerText = this.hunger
   }, 8000)
   setInterval( () => {
    this.sleepiness += 2
    sleepNumber.innerText = this.sleepiness
   }, 10000)
   setInterval ( () => {
    this.boredom += 1
    boredomNumber.innerText = this.boredom
   }, 8000)
   setInterval( () => {
    this.age += 1
    ageNumber.innerText = this.age
   }, 15000)
  }
}


})