



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
// *********** Creating CLASS fot the game ************
class Spaceship {
    constructor(hull, firePower, accuracy) {
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
    }
    attack() {
        this.firePower -= .5;
        playerStats.textContent = `Hull : ${this.hull}  '\r\n'  FirePower : ${this.firePower}  '\r\n'  Accuracy : ${this.accuracy}`

        if (this.accuracy < 0.8) {

            planOfAction.textContent += `It was ***HIT*** with an accuracy of ${this.accuracy}. Now let's hit again! ATTACK!       \r\n`

            
            // enemyStats.textContent = `Hull : ${alien[i].hull}  '\r\n'  FirePower : ${alien[i].firePower}  '\r\n'  Accuracy : ${alien[i].accuracy}`
            // uss.accuracy = Math.random();

        } else if (this.accuracy >= 0.8) {

            playerStats.textContent = `Hull : ${this.hull}  '\r\n'  FirePower : ${this.firePower}  '\r\n'  Accuracy : ${this.accuracy}`


            planOfAction.textContent += "We MISSed!!!! Let's try and hit accurately Next time. Be prepared for my Command.      \r\n";

            alien[i].accuracy = 0.7;
        }
    }
}

// ******** Creating Objects fot the game **********


let uss = new Spaceship(15, 5, .7);

const alien = [];

for(let i=0; i<6; i++){
    alien.push(new Spaceship(Math.floor(Math.random() * (6 - 3 + 1)) + 3, Math.floor(Math.random() * (4 - 2 + 1)) + 2, Math.floor(Math.random() * (.8 - .6 + 1)) + .6))
}
// console.log(uss);
// console.log(alien);

// ******* Adding an event listener to perform an action when ATTACK button is clicked.

const attackButton = document.querySelector('#attack')
attackButton.addEventListener('click', startBattle)

function startBattle() {
    // dBox.style.display = 'none';
    console.log('attack')
    uss.attack();

    for (let i = 0; i <= alien[i].length; i++) {
        while ((uss.hull >= 0 && uss.firePower >= 0) && (alien[i].hull >= 0 && alien[i].firePower >= 0)) {
            console.log('Can Attack');
            if (uss.hull === 0 || uss.firePower === 0) {
                planOfAction.textContent += `   GAME OVERRR!!!your health is ${uss.hull} and Your FirePower is ${uss.firePower}. You cannot continue fighting. ***** USS LOST *******`

                break;
            } else if (alien[i].hull === 0 || alien[i].firePower === 0) {
                planOfAction.textContent += `   GAME OVERRR!!! The Alein health is ${alien[i].hull} and the alien FirePower is ${alien[i].firePower}. The Alien cannot continue fighting. ***** USS WON and the ALIEN LOST *******`

                break;
            }

            if (uss.accuracy >= 0.8) {
                console.log('Alien attacking');
                alien[i].attack();
            }
            alien[i].accuracy = Math.random();


            if (alien[i].accuracy >= 0.8) {
                console.log('USS attacking');
                uss.attack();
                alien[i].hull--;
            }

            uss.accuracy = Math.random();

        }
    }

}
// dBox.style.display = 'flex';


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
    btnStart.style.display = 'flex';
}





// // ******* Getting the required QuerySelectors *********

// const btnStart = document.querySelector('#btn');
// const btnNext = document.querySelector('#next');
// const instruct = document.querySelector('.instruction');
// const dBox = document.querySelector('.dialogBox');
// const planOfAction = document.querySelector('#plan');
// const playerStats = document.querySelector('.playerStats');
// const enemyStats = document.querySelector('.enemyStats');
// const end = document.querySelector('#endText');
// const finalPopup = document.querySelector('.finalPopup');



// //  ******* Adding an event listener to perform an action when START button is clicked.
// btnStart.addEventListener('click', showInstructions)
// function showInstructions() {

//     instruct.style.display = 'flex';
//     btnStart.style.display = 'none';

// }

// // ******* Adding an event listener to perform an action when NEXT button is clicked.

// btnNext.addEventListener('click', action);
// function action() {

//     instruct.style.display = 'none';
//     btnStart.style.display = 'none';

//     let text1 = document.createTextNode("CAPITAN: Let's attack!!!   ")
//     planOfAction.appendChild(text1);
//     dBox.style.display = 'flex';
// }

// // ******** Creating Objects fot the game **********

// const uss = {
//     hull: 15,
//     firePower: 5,
//     accuracy: Math.random(),
//     attack() {

//         // console.log("Are you attacking");
//         this.firePower -= .5;
//         playerStats.textContent = `Hull : ${this.hull}  '\r\n'  FirePower : ${this.firePower}  '\r\n'  Accuracy : ${this.accuracy.toFixed(1)}`

//         if (uss.accuracy < 0.8) {

//             planOfAction.textContent += `It was ***HIT*** with an accuracy of ${uss.accuracy.toFixed(1)}. Now let's hit again! ATTACK!       \r\n`


//             alien.hull--;
//             enemyStats.textContent = `Hull : ${alien.hull}  '\r\n'  FirePower : ${alien.firePower}  '\r\n'  Accuracy : ${alien.accuracy.toFixed(1)}`
//             // uss.accuracy = Math.random();

//         } else if (uss.accuracy >= 0.8) {

//             playerStats.textContent = `Hull : ${this.hull}  '\r\n'  FirePower : ${this.firePower}  '\r\n'  Accuracy : ${this.accuracy.toFixed(1)}`


//             planOfAction.textContent += "We MISSed!!!! Let's try and hit accurately Next time. Be prepared for my Command.      \r\n";

//             alien.accuracy = 0.7;

//         }
//     }

// }

// const alien = {
//     hull: 6,
//     firePower: 3,
//     accuracy: Math.random(),

//     attack() {
//         this.firePower--;
//         enemyStats.textContent = `Hull : ${this.hull}  '\r\n'  FirePower : ${this.firePower}  '\r\n'  Accuracy : ${this.accuracy.toFixed(1)}`

//         if (alien.accuracy < 0.8) {
//             planOfAction.textContent += `MAYDAY!!! MAYDAY!!! Our ship was HIT!! Look for damages.     '\r\n'`

//             uss.hull--;
//             // alien.accuracy = Math.random();

//         } else if (uss.accuracy >= 0.8) {
//             enemyStats.textContent = `Hull : ${this.hull}  '\r\n'  FirePower : ${this.firePower}  '\r\n'  Accuracy : ${this.accuracy.toFixed(1)}`

//             planOfAction.textContent += `They MISSed!!!! Let's try and hit accurately this time. ATTACK!     '\r\n'`

//             uss.accuracy = 0.7;

//         }
//     }
// }


// // ******* Adding an event listener to perform an action when ATTACK button is clicked.

// const attackButton = document.querySelector('#attack')
// attackButton.addEventListener('click', startBattle)

// function startBattle() {
//     // dBox.style.display = 'none';
//     // console.log('attack')
//     uss.attack();

//     while ((uss.hull >= 0 && uss.firePower >= 0) && (alien.hull >= 0 && alien.firePower >= 0)) {

//         if (uss.hull === 0 || uss.firePower === 0) {
//             planOfAction.textContent += `   GAME OVERRR!!!your health is ${uss.hull} and Your FirePower is ${uss.firePower}. You cannot continue fighting. ***** USS LOST *******`

//             break;
//         } else if (alien.hull === 0 || alien.firePower === 0) {
//             planOfAction.textContent += `   GAME OVERRR!!! The Alein health is ${alien.hull} and the alien FirePower is ${alien.firePower}. The Alien cannot continue fighting. ***** USS WON and the ALIEN LOST *******`

//             break;
//         }

//         if (uss.accuracy >= 0.8) {
//             console.log('Alien attacking');
//             alien.attack();
//         }
//         alien.accuracy = Math.random();


//         if (alien.accuracy >= 0.8) {
//             console.log('USS attacking');
//             uss.attack();
//         }

//         uss.accuracy = Math.random();

//     }

// }
// dBox.style.display = 'flex';


// // ********* Writing code for If RETREAT is selected you lose the game.
// const retreat = document.querySelector('#retreat');
// retreat.addEventListener('click', lost);

// function lost() {

//     end.innerText = "Since you have retreated you have lost our world to the Alien. They have taken control us. GOD SAVE US ALL!!!"
//     finalPopup.style.display = 'flex';
// }

// // ******* Giving a chance to fight again
// const cancel = document.querySelector('#cancel');
// cancel.addEventListener('click', goAgain)

// function goAgain() {
//     finalPopup.style.display = 'none';
// }

// // **************Ending the Game
// const endGame = document.querySelector('#endGame');
// endGame.addEventListener('click', gameOver);
// function gameOver() {
//     finalPopup.style.display = 'none';
//     dBox.style.display = 'none';
//     btnStart.style.display = 'flex';
// }










