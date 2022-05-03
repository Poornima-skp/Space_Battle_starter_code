
// ******* Getting the required QuerySelectors *********

const btnStart = document.querySelector('#btn');
const btnNext = document.querySelector('#next');
const instruct = document.querySelector('.instruction');
const dBox = document.querySelector('.dialogBox');
const planOfAction = document.querySelector('#plan');
const playerStats = document.querySelector('.playerStats');
const enemyStats = document.querySelector('.enemyStats');
const end = document.querySelector('#endText');
const finalPopup = document.querySelector('.finalPopup');

//  ******* Adding an event listener to perform an action when START button is clicked.
btnStart.addEventListener('click', showInstructions)
function showInstructions() {

    instruct.style.display = 'flex';
    btnStart.style.display = 'none';

}

// ******* Adding an event listener to perform an action when NEXT button is clicked.

btnNext.addEventListener('click', action);
function action() {

    instruct.style.display = 'none';
    btnStart.style.display = 'none';

    let text1 = document.createTextNode("CAPITAN: Let's attack!!!   ")
    planOfAction.appendChild(text1);
    dBox.style.display = 'flex';
}

// ******** Creating Objects fot the game **********

const uss = {
    hull: 15,
    firePower: 5,
    accuracy: Math.random(),
    attack() {

        console.log("Are you attacking");
        this.firePower -= .5;
        playerStats.textContent = `Hull : ${this.hull}  '\r\n'  FirePower : ${this.firePower}  '\r\n'  Accuracy : ${this.accuracy.toFixed(1)}`

        if (uss.accuracy < 0.8) {

            planOfAction.textContent += `It was ***HIT*** with an accuracy of ${uss.accuracy.toFixed(1)}. Now let's hit again! ATTACK!       \r\n`

            alien.hull--;
            enemyStats.textContent = `Hull : ${alien.hull}  '\r\n'  FirePower : ${alien.firePower}  '\r\n'  Accuracy : ${alien.accuracy.toFixed(1)}`
            // uss.accuracy = Math.random();

        } else if (uss.accuracy >= 0.8) {

            playerStats.textContent = `Hull : ${this.hull}  '\r\n'  FirePower : ${this.firePower}  '\r\n'  Accuracy : ${this.accuracy.toFixed(1)}`


            planOfAction.textContent += "We MISSed!!!! Let's try and hit accurately Next time. Be prepared for my Command.      \r\n";
            alien.accuracy = 0.7;

        }
    }

}

const alien = {
    hull: 6,
    firePower: 3,
    accuracy: Math.random(),

    attack() {
        this.firePower--;
        enemyStats.textContent = `Hull : ${this.hull}  '\r\n'  FirePower : ${this.firePower}  '\r\n'  Accuracy : ${this.accuracy.toFixed(1)}`

        if (alien.accuracy < 0.8) {
            planOfAction.textContent += `MAYDAY!!! MAYDAY!!! Our ship was HIT!! Look for damages.     '\r\n'`
            uss.hull--;
            alien.accuracy = Math.random();

        } else if (uss.accuracy >= 0.8) {
            enemyStats.textContent = `Hull : ${this.hull}  '\r\n'  FirePower : ${this.firePower}  '\r\n'  Accuracy : ${this.accuracy.toFixed(1)}`

            planOfAction.textContent += `They MISSed!!!! Let's try and hit accurately this time. ATTACK!     '\r\n'`
            uss.accuracy = 0.7;

        }
    }
}


// ******* Adding an event listener to perform an action when ATTACK button is clicked.

const attackButton = document.querySelector('#attack')
attackButton.addEventListener('click', startBattle)

function startBattle() {
    // dBox.style.display = 'none';
    console.log('attack')

    while ((uss.hull >= 0 && uss.firePower >= 0) && (alien.hull >= 0 && alien.firePower >= 0)) {

        if (uss.hull === 0 || uss.firePower === 0) {
            planOfAction.textContent += `   GAME OVERRR!!!your health is ${uss.hull} and Your FirePower is ${uss.firePower}. You cannot continue fighting. ***** USS LOST *******`
            // dBox.style.display = 'flex';

            break;
        } else if (alien.hull === 0 || alien.firePower === 0) {
            planOfAction.textContent += `   GAME OVERRR!!! The Alein health is ${alien.hull} and the alien FirePower is ${alien.firePower}. The Alien cannot continue fighting. ***** USS WON and the ALIEN LOST *******`
            // dBox.style.display = 'flex';

            break;
        }

        if (uss.accuracy < 0.8 && alien.hull > 0) {
            console.log('uss attacking');
            uss.attack();
        }

        if (alien.accuracy < 0.8 && uss.hull > 0) {
            console.log('Alein attacking');
            alien.attack();
        }
    }

}
dBox.style.display = 'flex';


// ********* Writing code for If RETREAT is selected you lose the game.
const retreat = document.querySelector('#retreat');
retreat.addEventListener('click', lost);

function lost() {

    end.innerText = "Since you have retreated you have lost our world to the Alien. They have taken control us. GOD SAVE US ALL!!!"
    finalPopup.style.display = 'flex';
}

// ******* Giving a chance to fight again
const cancel = document.querySelector('#cancel');
cancel.addEventListener('click', goAgain)

function goAgain() {
    finalPopup.style.display = 'none';
}

// **************Ending the Game
const endGame = document.querySelector('#endGame');
endGame.addEventListener('click', gameOver);
function gameOver() {
    finalPopup.style.display = 'none';
    dBox.style.display = 'none';
    btnStart.style.display = 'flex';
}





