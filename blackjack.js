let cards = []
let sum1 = 0
console.log(sum1)
let message1 = ""
let hasblackjack = false
let isalive = false
let player = {
    name: "Per",
    chips: 20
}

let playerl = document.querySelector("#player")
playerl.innerHTML = player.name + ": $" + player.chips
let messagel = document.getElementById("message")
let cardsl = document.querySelector("#cards")
// let suml=document.getElementById("sum")
let suml = document.querySelector("#sum")

function getrandomcard() {
    let temp = Math.floor(Math.random() * 13 + 1)
    if (temp > 10)
        return 10
    else if (temp === 1)
        return 11
    else return temp
}
function gameon() {
    if(player.chips===0)
    {player.chips=20
        playerl.innerHTML = player.name + ": $" + player.chips
    }
    isalive = true
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
    cards = [firstcard, secondcard]
    sum1 = firstcard + secondcard
    rendergame()
}

function rendergame() {
    
    suml.innerHTML = "Sum: " + sum1
    if (sum1 < 21) {
        message1 = "Do you want to draw a new card ?"
    }
    else if (sum1 === 21) {
        message1 = "You have got blackjack."
        hasblackjack = true
        player.chips+=5
        playerl.innerHTML = player.name + ": $" + player.chips

    }
    else {
        message1 = "You have lost!"
        isalive = false
        player.chips-=5
        playerl.innerHTML = player.name + ": $" + player.chips


    }
    messagel.innerHTML = message1
    cardsl.innerHTML = "Cards: "
    for (let i = 0; i < cards.length; i++) { cardsl.innerHTML += cards[i] + " " }

    console.log(isalive)
    console.log(hasblackjack)
}
function newcard() {
    if (isalive === true && hasblackjack === false) {
        console.log("drawing new card")
        let card = getrandomcard()
        sum1 += card
        cards.push(card)
        rendergame()
    }


}