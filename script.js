let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let sissors = document.getElementById('sissors')
let playerpicked = document.getElementById('playerpicked')
let compicked = document.getElementById('computerpicked')
let whowins = document.getElementById('whowins')
let playerscore = document.getElementById('playerscore')
let comnum = document.getElementById('comnum')
let playerimg = document.getElementById('playerchoiceimg')
let computerimg = document.getElementById('computerchoiceimg')

let playernumber = 0
let computerscore = 0


rock.addEventListener("click", function (event){
    event.preventDefault()
    let randomnumber = Math.floor(Math.random()*3)
    console.log(randomnumber)
    if(randomnumber == 0) {
        console.log('draw')
        
        whowins.innerHTML = 'DRAW'
        computerimg.src = "icons/rock.png"
    }else if(randomnumber == 1) {
        console.log('lose')
        
        whowins.innerHTML = 'COMPUTER'
        computerscore++
        comnum.innerHTML = computerscore.toString()
        computerimg.src = "icons/paper.png"
    }else if(randomnumber == 2) {
        console.log('win')
        
        whowins.innerHTML = 'PLAYER'
        playernumber++
        console.log(playernumber.toString())
        playerscore.innerHTML = playernumber.toString()
        computerimg.src = "icons/sissor.png"
    }
    playerimg.src = 'icons/rock.png'
    animateChoices();
})

paper.addEventListener("click", function (){
    let randomnumber = Math.floor(Math.random()*3)
    console.log(randomnumber)
    if(randomnumber == 0) {
        console.log('win')
        
        whowins.innerHTML = 'PLAYER'
        playernumber++
        console.log(playernumber.toString())
        playerscore.innerHTML = playernumber.toString()
        computerimg.src = "icons/rock.png"
    }
    if(randomnumber == 1) {
        console.log('draw')
        
        whowins.innerHTML = 'DRAW'
        computerimg.src = "icons/paper.png"
    }
    if(randomnumber == 2) {
        console.log('lose')
        
        whowins.innerHTML = 'COMPUTER'
        computerscore++
        comnum.innerHTML = computerscore.toString()
        computerimg.src = "icons/sissor.png"
    }
    
    playerimg.src = 'icons/paper.png'
    animateChoices();
})

sissors.addEventListener("click", function (){
    let randomnumber = Math.floor(Math.random()*3)
    console.log(randomnumber)
    if(randomnumber == 0) {
        console.log('lose')
        
        whowins.innerHTML = 'COMPUTER'
        computerscore++
        comnum.innerHTML = computerscore.toString()
        computerimg.src = "icons/rock.png"
    }
    if(randomnumber == 1) {
        console.log('win')
        
        whowins.innerHTML = 'PLAYER'
        playernumber++
        console.log(playernumber.toString())
        playerscore.innerHTML = playernumber.toString()
        computerimg.src = "icons/paper.png"
    }
    if(randomnumber == 2) {
        console.log('draw')
        
        whowins.innerHTML = 'DRAW'
        computerimg.src = "icons/sissor.png"
    }
    
    playerimg.src = 'icons/sissor.png'
    animateChoices();
})

// used animemation from a turtorial video
function animateChoices(playerWins) {
    playerimg.classList.remove('slide-in-left', 'slide-out-left', 'slide-in-right', 'slide-out-right', 'winner-glow');
    computerimg.classList.remove('slide-in-left', 'slide-out-left', 'slide-in-right', 'slide-out-right', 'winner-glow');

    playerimg.classList.add('slide-out-left');
    computerimg.classList.add('slide-out-right');

    setTimeout(() => {
        playerimg.classList.remove('slide-out-left');
        computerimg.classList.remove('slide-out-right');

        playerimg.classList.add('slide-in-left');
        computerimg.classList.add('slide-in-right');

        if (playerWins === 'player') {
            playerimg.classList.add('winner-glow');
        } else if (playerWins === 'computer') {
            computerimg.classList.add('winner-glow');
        }
    }, 100);
}