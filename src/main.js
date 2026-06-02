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
    volume: 0.1   
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
    if (score >= 25){
        updateScore(-25)
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
    if  (score>=100){
        updateScore(-100)
        physStr++
        upgradeTwoCount.innerText = physStr + " Physical Strength"
        purchaseSound.stop()
        purchaseSound.play()
    }
})

function gameLoop() {
    let clickAmt = (atomicBreath ** 1.05) + (physStr ** 3.05) + (regen ** 6.05)

    updateScore(clickAmt)
}

setInterval(gameLoop, 1000)

let upgradeThree = document.getElementById("upgradeThree")
let upgradeThreeCount = document.getElementById("upgradeThreeCount")

let regen = 0

upgradeThree.addEventListener("click", function(){
    if  (score>=1000){
        updateScore(-1000)
        regen++
        upgradeThreeCount.innerText = regen + " Regenerative cells"
        purchaseSound.stop()
        purchaseSound.play()
    }
})