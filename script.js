// ******* Getting the required QuerySelectors *********

const btnStart = document.querySelector('#btn');
const btnNext = document.querySelector('#next');
const instruct = document.querySelector('.instruction');
const dBox = document.querySelector('.dialogBox');
const enemyBox = document.querySelector('.enemyDialogBox');
const planOfAction = document.querySelector('#plan');
const enemyNo = document.querySelector('#enemyNo');
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
    enemyBox.style.display = 'flex';
}

// *********** Creating CLASS fot the game ************
class Spaceship {
    constructor(hull, firePower, accuracy) {
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
    }
}

// ******** Creating Objects fot the game **********

const uss = new Spaceship(50, 20, .7);

const alien = [];

for (let i = 0; i < 6; i++) {
    alien.push(new Spaceship(Math.floor(Math.random() * (6 - 3 + 1)) + 3, Math.floor(Math.random() * (4 - 2 + 1)) + 2, Math.floor(Math.random() * (.8 - .6 + 1)) + .6))
}

// ******* Adding an event listener to perform an action when ATTACK button is clicked.

const attackButton = document.querySelector('#attack')
attackButton.addEventListener('click', startBattle);

function startBattle() {

    for (let i = 1; i <= alien.length; i++) {
        while ((uss.hull >= 0 && uss.firePower >= 0) && (alien[i].hull >= 0 && alien[i].firePower >= 0)) {
            console.log('Can Attack');

            if (uss.hull === 0 || uss.firePower === 0) {
                planOfAction.textContent += `   GAME OVERRR!!!your health is ${uss.hull} and Your FirePower is ${uss.firePower}. You cannot continue fighting. ***** USS LOST *******\n`
                break;

            } else if (alien[i].hull === 0 || alien[i].firePower === 0) {
                planOfAction.textContent += `Alien ${i} is defeated.\n`
                break;
            }

            if (uss.accuracy < 0.8) {

                planOfAction.textContent += `It was ***HIT*** with an accuracy of ${uss.accuracy}. Now let's hit again! ATTACK!! \n`

                alien[i].hull--;
                uss.firePower -= 1;

                playerStats.textContent = `Hull : ${uss.hull} \n  FirePower : ${uss.firePower}  \n  Accuracy : ${uss.accuracy}`


                enemyStats.textContent = `Hull : ${alien[i].hull}  \n  FirePower : ${alien[i].firePower}  \n  Accuracy : ${alien[i].accuracy}`

                uss.accuracy = Math.random().toFixed(1);

            } else if (this.accuracy >= 0.8) {

                uss.firePower -= .5;

                playerStats.textContent = `Hull : ${uss.hull}  \n  FirePower : ${uss.firePower}  \n  Accuracy : ${uss.accuracy}`


                planOfAction.textContent += `We MISSed!!!! Let's try and hit accurately Next time. Be prepared for my Command. \n`;

                uss.accuracy = Math.random().toFixed(1);

            }
            alien[i].accuracy = Math.random().toFixed(1);

            if (alien[i].accuracy < 0.8) {

                planOfAction.textContent += `We were HIT. Check for damages and lets go again. \n`

                alien.firePower -= 1;
                uss.hull -= 1;

                enemyStats.textContent = `Hull : ${alien[i].hull}  \n  FirePower : ${alien[i].firePower}  \n  Accuracy : ${alien[i].accuracy}`

                playerStats.textContent = `Hull : ${uss.hull}  \n  FirePower : ${uss.firePower}  \n  Accuracy : ${uss.accuracy}`

                alien[i].accuracy = Math.random().toFixed(1);

            } else if (this.accuracy >= 0.8) {

                alien.firePower -= 1;

                enemyStats.textContent = `Hull : ${uss.hull}  \n  FirePower : ${uss.firePower}  \n  Accuracy : ${uss.accuracy}`


                planOfAction.textContent += "They MISSed!!!! Narrow escape... This is our chance. Let's attack again      \n";

                alien[i].accuracy = Math.random().toFixed(1);
            }
            uss.accuracy = Math.random().toFixed(1);
        }
        if(alien[i].hull === 0){
            if(alien.length > 0){
                enemyNo.textContent += `Alien ${i} is defeated, let's bring in the next ship to attack. \n\n`;
            }
        }
    }
}

// ********* Writing code for If RETREAT is selected you lose the game.
const retreat = document.querySelector('#retreat');
retreat.addEventListener('click', lost);

function lost() {

    end.innerText = "Since you have retreated you have lost our world to the alien[i]. They have taken control us. GOD SAVE US ALL!!!"
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
    enemyBox.style.display = 'flex';

    btnStart.style.display = 'flex';
}





