const DEFAULT = 0;
let counter = DEFAULT;

const btnDecreaseDOM = document.querySelector('#btnDecr');
const btnResetDOM = document.querySelector('#btnReset');
const btnIncreaseDOM = document.querySelector('#btnIncr');
const counterDOM = document.querySelector('#counter');

/**
 *  Listener
 */
btnDecreaseDOM.addEventListener('click', onClickMeClicked);

btnResetDOM.addEventListener('click', onClickMeClicked);

btnIncreaseDOM.addEventListener('click', onClickMeClicked);

/**
 *  Controller
 *  Actions taken after 'Click me' event button, clicked.
 * 
 */

function onClickMeClicked() {
    const btnChoice = this.id;
    increaseCount(btnChoice);
    decreaseCount(btnChoice);
    resetCount(btnChoice);
    displayCounterResults();
};


/**
 *  Model 
 *  Increases, decreases or resets the counter upon event click.
 */
function increaseCount(btnChoice) {
    if (btnChoice === 'btnIncr') {
        counter++;
    }
};

function decreaseCount(btnChoice) {
    if (btnChoice === 'btnDecr' && !counter <= 0) {
        counter--;
    }
};

function resetCount(btnChoice) {
    if (btnChoice === 'btnReset') {
    counter = DEFAULT;
    }
};


/**
 *  View 
 *  Displays the results to the user's screen.
 */

function displayCounterResults() {
    counterDOM.innerHTML = counter;
};