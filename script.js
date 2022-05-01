// console.log('Hello World')

// ******* Getting the required QuerySelectors *********

const btnStart = document.querySelector('#btn');
// console.log(btnStart);
const btnNext = document.querySelector('#next');
// console.log(btnNext);
const removeStart = document.querySelector('#startDiv');
const instruct = document.querySelector('.instruction');
const dBox = document.querySelector('.dialogBox');
const planOfAction = document.querySelector('#plan');
const end = document.querySelector('#endText');
const finalPopup = document.querySelector('.finalPopup');

//  ******* Adding an event listener to perform an action when START button is clicked.
btnStart.addEventListener('click', showInstructions)
function showInstructions() {
    // console.log('hello'); ------

    // const instruct = document.querySelector('.instruction');
    // console.log(instruct);
    instruct.style.display = 'flex';
}

// ******** Creating Objects fot the game **********

const uss = {
    hull: 15,
    firePower: 5,
    accuracy: Math.random()

}
// console.log(uss.accuracy);

const alien = {
    hull: 6,
    firePower: 3,
    accuracy: Math.random()
}
// console.log(alien.accuracy);


// ******* Adding an event listener to perform an action when NEXT button is clicked.

btnNext.addEventListener('click', attack);
function attack() {
    
    instruct.style.display = 'none';
    btnStart.style.display = 'none';

    // console.log(planOfAction);
    let text1 = document.createTextNode("CAPITAN: Let's attack")
    planOfAction.appendChild(text1);

    dBox.style.display = 'flex';
}


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

function goAgain(){
    finalPopup.style.display = 'none';
}

// **************Ending the Game
const endGame = document.querySelector('#endGame');
endGame.addEventListener('click', gameOver);
function gameOver(){
    finalPopup.style.display = 'none';
    dBox.style.display = 'none';
    btnStart.style.display = 'flex';
}





