// alert("I am connected")

var spaceshipLocation = Math.floor(Math.random() * 9)
var alienLocation = Math.floor(Math.random() * 9)
var clickCounter = 5
document.getElementById("click").innerHTML = clickCounter

if (spaceshipLocation === alienLocation)
    alienLocation

const ship = (location) => {

  if (location === spaceshipLocation) {
    document.getElementById(spaceshipLocation).innerHTML = "🚀"
    alert("You Win!")
 } else if (location === alienLocation) {
    document.getElementById(alienLocation).innerHTML = "👽"
    alert("You Lose!")
 } else {
    clickCounter--
    document.getElementById("click").innerHTML = clickCounter
    document.getElementById(location).innerHTML = "🌠"
    if (clickCounter === 0) {
        alert("You Lose!")
    }
 }
}


// const playerChoice = (gameRandom) => {
//     if (X === )
// }

// var shipLocation = Math.floor(Math.random() * 9)
// var bombLocation = Math.floor(Math.random() * 9)

// const shipLoc = (location) => {
//     if (location === "0") {
//         document.getElementById("0").innerHTML = "🚀" 
//         else if (location === "1") 
//             document.getElementById("1").innerHTML = "🚀" 
//             else if (location === "2") 

//             }
//         }
//     }
// }