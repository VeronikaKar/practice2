import { refs } from "./refs.js";
import { Updatedisplay } from "./updateDisplay.js";
import { LS_KEY } from "./LS_KEYS.js";
refs.controlBtns.addEventListener('click', onControlsBtnsClick);
let count = 0;
function onControlsBtnsClick(event) {
    if (event.target.nodeName !== 'BUTTON') return;
    const action = event.target.dataset.action;
}

// if (action === 'decrease') {
//     count -= 1;
//     Updatedisplay();
// }
// if (action === 'increase') {
//     count += 1;
//     Updatedisplay ();
// }
// if (action === 'reset') {
//     count = 0;
// }
switch (action) {
    case 'decrease':
        count -= 1;
        break;
    case 'increase':
        count += 1;
        break;
case'reset':
        count += 1;
        break;
    default: "Error";
        break;
}
Updatedisplay(count)


function onSaveBtnsClick(event) {
    if (event.target.nodeName !== 'BUTTON') return;
    const action = event.target.dataset.action;

    switch (action) {
        case 'save':
            localStorage.setItem('count', LS_KEY.count);
            break;
        case 'clear - save':
            localStorage.removeItem('count', LS_KEY.count);
            break;
        default: 'Error';
            break;
    }
}

(function renderPage() {
    const lsData = localStorage.getItem(LS_KEY.count)
    if (lsData) {
        count = Number(lsData)
        Updatedisplay()
    }
    console.log(lsData);
})()
// renderPage()