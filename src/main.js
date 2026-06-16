let clicker = document.getElementById("clicker")
let display = document.getElementById("display")

let score = 0


import { Howl, Howler } from "howler"

import soundEffectOneSrc from './assets/Godzilla_Showa_SFX.ogg'

import backgroundMusicSrc from './assets/01. Main Menu Theme.mp3'

import purchaseSoundSrc from './assets/godzilla-footstep.mp3'

const purchaseSound = new Howl({
    src: [purchaseSoundSrc],
    volume: 0.3
})

const soundEffectOne = new Howl({
    src: [soundEffectOneSrc],
    volume: 0.3
})

const backgroundMusic = new Howl({
    src: [backgroundMusicSrc], 
    autoplay: true,
    loop: true,
    volume: 0.1,
})

const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    notation: "compact",
    compactDisplay: "short"
})

function updateScore (amount) {
    score += amount
    display.innerText = formatter.format(score) + " Kaiju's Defeated"
}

clicker.addEventListener("click", function() {
    let clickAmt = 1 + (atomicBreath ** 1.05) + (physStr ** 2.05) + (regen ** 3.05)
    
    updateScore(clickAmt)
    soundEffectOne.stop()
    soundEffectOne.play()
    
})

let upgradeOne = document.getElementById("upgradeOne")
let upgradeOneCount = document.getElementById("upgradeOneCount")

let atomicBreath = 0

upgradeOne.addEventListener("click", function(){
    if (score >= 125){
        updateScore(-125)
        atomicBreath++
        upgradeOneCount.innerText = atomicBreath + " Atomic Breath Enhancer"
        purchaseSound.stop()
        purchaseSound.play()
    } else { 
      alert("you broke boy!!!")
    }

})

let upgradeTwo = document.getElementById("upgradeTwo")
let upgradeTwoCount = document.getElementById("upgradeTwoCount")

let physStr = 0

upgradeTwo.addEventListener("click", function(){
    if  (score>=500){
        updateScore(-500)
        physStr++
        upgradeTwoCount.innerText = physStr + " Physical Strength"
        purchaseSound.stop()
        purchaseSound.play()
    }
})

function gameLoop() {
    let clickAmt = (atomicBreath ** 1.05) + (physStr ** 1.80) + (regen ** 3.00) + (absorb ** 3.90) + (durable ** 5.00)

    updateScore(clickAmt)
}

setInterval(gameLoop, 1000)

let upgradeThree = document.getElementById("upgradeThree")
let upgradeThreeCount = document.getElementById("upgradeThreeCount")

let regen = 0

upgradeThree.addEventListener("click", function(){
    if  (score>=3000){
        updateScore(-3000)
        regen++
        upgradeThreeCount.innerText = regen + " Regenerative cells"
        purchaseSound.stop()
        purchaseSound.play()
    }
})
let upgradeFour = document.getElementById("upgradeFour")
let upgradeFourCount = document.getElementById("upgradeFourCount")

let absorb = 0

upgradeFour.addEventListener("click", function(){
    if  (score>=50000){
        updateScore(-50000)
        absorb++
        upgradeFourCount.innerText = absorb + " Energy absorption"
        purchaseSound.stop()
        purchaseSound.play()
    }
})

let upgradeFive = document.getElementById("upgradeFive")
let upgradeFiveCount = document.getElementById("upgradeFiveCount")

let durable = 0

upgradeFive.addEventListener("click", function(){
    if  (score>=10000000){
        updateScore(-10000000)
        durable++
        upgradeFiveCount.innerText = durable + " Durability"
        purchaseSound.stop()
        purchaseSound.play()
    }
})

let rebirthOne = document.getElementById("rebirthOne")
let rebirthOneCount = document.getElementById("rebirthOneCount")

let rebirth = 0

rebirthOne.addEventListener("click", function(){
    if  (score>=1000000000000){
        updateScore(-1000000000000)
        rebirth++
        rebirthOneCount.innerText = rebirth + " Era"
    }
})