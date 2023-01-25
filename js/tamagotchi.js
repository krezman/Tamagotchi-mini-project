// let load = document.addEventListener("DOMContentLoaded", () => {


let nameing = document.querySelector("#name")
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
  if (this.hunger > 9) {
      loseGame()
    }
    this.hunger += 2
    hungerNumber.innerText = this.hunger
   }, 4000)


   setInterval( () => {
  if (this.sleepiness > 9) {
      loseGame2()
    }
    this.sleepiness += 1
    sleepNumber.innerText = this.sleepiness
   }, 3000)


   setInterval ( () => {
  if (this.boredom > 9) {
      loseGame3()
    }
    this.boredom += 1
    boredomNumber.innerText = this.boredom
   }, 2000)


   setInterval( () => {
  if (this.age > 2) {
    transform1()
  }
  if (this.age > 5) {
    transform2()
  }
    this.age += 1
    ageNumber.innerText = this.age
   }, 8000)
  }
  
  water = () => {
    this.hunger -= 1
    hungerNumber.innerText = this.hunger
  }
  sleep = () => {
    this.sleepiness -= 1
    sleepNumber.innerText = this.sleepiness
    lightsOff()
    setTimeout(lightsOn, 3000)
  }
  play = () => {
    this.boredom -= 1
    boredomNumber.innerText = this.boredom
  }
}





let newName = prompt("What shall we name them?"); // Allow the user to name the pet
  nameing.insertAdjacentText("beforeend", newName); // Insert the chosen name on the webpage
  const newPet = new Pet(newName) // Instansiating the new pet via the pet class created 
  hungerNumber.innerText = 0
  sleepNumber.innerText = 0
  boredomNumber.innerText = 0
  ageNumber.innerText = 0



let waterBtn = document.querySelector("#water")
let sleepBtn = document.querySelector("#rest")
let playBtn = document.querySelector("#play")



const loseGame = () => {
  alert("You let you pet wilt away...")
  restartGame()
}

const loseGame2 = () => {
  alert("You kept your pet up for way too long... they died from exhaustion.")
  restartGame()
}

const loseGame3 = () => {
  alert("You didn't play with your pet enough and they died from boredom. You're worse than drying paint.")
  restartGame()
}

const restartGame = () => {
    window.location.reload()
}


  waterBtn.addEventListener("click", newPet.water)

  sleepBtn.addEventListener("click", newPet.sleep)

  playBtn.addEventListener("click", newPet.play)



let babyG = document.querySelector("#twig")

let youthG = document.querySelector("#youth")

let adultG = document.querySelector("#adult")




const transform1 = () => {
  babyG.style.display = "none"
  youthG.style.display = "block"
}


const transform2 = () => {
  youthG.style.display = "none"
  adultG.style.display = "block"
}


let lights = document.querySelector(".lights")


const lightsOff = () => {
  lights.style.display = "none"
}

const lightsOn = () => {
  lights.style.display = "block"
}