let color = '';

/**
 * Listener
 */
document.querySelector('#btn').addEventListener('click', function() {
    onClickMeClicked();
});

/**
 * Controller
 * Actions taken after 'Click Me' button, clicked
 */
function onClickMeClicked() {
    updateBg();
};

/**
 * Model
 * Gets a color and updates the UI background
 */
function updateBg() {
    color = getRandomBgColor();
    showBgColor(color);
};

/**
 * Chooses, randomly, a color from a standard list
 * @returns the background color
 */
function getRandomBgColor() {
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';

    const hexColor = [...letters, ...num];

    for (let i = 1; i <= 6; i++) {
        let randomCol = Math.floor(Math.random() * hexColor.length);
        color  += hexColor[randomCol];    
    }
    return color;
};

/**
 * View
 * Fills the values of the corresponding UI Elements. 
 * @param {string} bgColor - the given color 
 */
function showBgColor(bgColor) {
    document.querySelector('#hex').innerHTML = bgColor;
    document.body.style.backgroundColor = bgColor;
};


