/// Making the background gif load

let background = document.querySelector("#ship")

let load = document.addEventListener("DOMContentLoaded", () => {
  background
})

/// Creating ways for the class to update the stat numbers associated with the class

let nameing = document.querySelector("#name")
let hungerNumber = document.querySelector("#hungerNumber")
let sleepNumber = document.querySelector("#sleepNumber")
let boredomNumber = document.querySelector("#boredomNumber")
let ageNumber = document.querySelector("#ageNumber")


/// Creating a class for the pet to be created

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
    this.sleepiness += 2
    sleepNumber.innerText = this.sleepiness
   }, 4000)


   setInterval ( () => {
  if (this.boredom > 9) {
      loseGame3()
    }
    this.boredom += 2
    boredomNumber.innerText = this.boredom
   }, 4000)


   setInterval( () => {
  if (this.age > 2) {
    transform1()
  }
  if (this.age > 5) {
    transform2()
  }
  if (this.age > 12) {
    proudParent()
  }
    this.age += 1
    ageNumber.innerText = this.age
   }, 6000)
  }
  
  water = () => {
    let hungerBase = 0
    if(this.hunger < 0) {
      hungerNumber.innerText = hungerBase
    } else {
      this.hunger -= 1
      hungerNumber.innerText = this.hunger
    }
  }
  sleep = () => {
    this.sleepiness = 0
    sleepNumber.innerText = this.sleepiness
    lightsOff()
    setTimeout(lightsOn, 2000)
  }
  play = () => {
    let playBase = 0
    if (this.boredom < 0) {
      boredomNumber.innerText = playBase
    } else {
      this.boredom -= 1
      boredomNumber.innerText = this.boredom
    }
  }
}



/// Instantiating the new Pet with the prompt name that was entered from the user

let newName = prompt("What shall we name them?"); // Allow the user to name the pet
  nameing.insertAdjacentText("beforeend", newName); // Insert the chosen name on the webpage
  const newPet = new Pet(newName) // Instansiating the new pet via the pet class created 
  hungerNumber.innerText = 0
  sleepNumber.innerText = 0
  boredomNumber.innerText = 0
  ageNumber.innerText = 0


/// Creating a way to target the buttons from the HTML

let waterBtn = document.querySelector("#water")
let sleepBtn = document.querySelector("#rest")
let playBtn = document.querySelector("#play")


/// Lose game functions

const loseGame = () => {
  alert("You let " + newPet.name + " wilt away... GAME OVER dude.")
  restartGame()
}

const loseGame2 = () => {
  alert("You kept " + newPet.name + " up for way too long... they died from exhaustion. GAME OVER silly goose.")
  restartGame()
}

const loseGame3 = () => {
  alert("You didn't play with " + newPet.name + " enough and they died from boredom. You're worse than drying paint. GAME OVER.")
  restartGame()
}

const restartGame = () => {
    window.location.reload()
}




/// Making the buttons functional

  waterBtn.addEventListener("click", newPet.water)

  sleepBtn.addEventListener("click", newPet.sleep)

  playBtn.addEventListener("click", newPet.play)



let babyG = document.querySelector("#twig")

let youthG = document.querySelector("#youth")

let adultG = document.querySelector("#adult")






/// Transformations

let alert1 = false

const transform1 = () => {
  if (alert1 === false) {
  alert("Woah! " + newPet.name + " is no longer just a sprout!")
  babyG.style.display = "none"
  youthG.style.display = "block"
  alert1 = true
  }
}



alert2 = false

const transform2 = () => {
  if (alert2 === false) {
  alert("You're gonna need a really big watering can for this guy...")
  youthG.style.display = "none"
  adultG.style.display = "block"
  alert2 = true
  }
}


/// Turning the lights off and on for rest


let lights = document.querySelector(".lights")


const lightsOff = () => {
  lights.style.display = "none"
}

const lightsOn = () => {
  lights.style.display = "block"
}


/// Win game

alert3 = false

const proudParent = () => {
  if (alert3 === false) {
    alert("Wow, they really do grow up so fast...")
    alert3 = true
    let answer = prompt("Do you want to try your hand at another little sprout? (yes or no)")
    let realAnswer = answer.toLocaleUpperCase()
    if (realAnswer === "YES") {
      alert("Awesome! Lets go again!")
      window.location.reload()
    } else {
    alert("Well it was fun while it lasted!")
    window.location.reload()
  }
 }
}