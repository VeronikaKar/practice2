import { LS_KEY } from "./LS_KEYS.js";
import { refs } from "./refs.js";
import {
    changeClass,
changeDarkTheme,
changeLightTheme,
} from "./switch-helper.js";
refs.checkBox.addEventListener("click", onCheckBoxClick);
document.addEventListener("DOMContentLoaded", setThemeOnLoad);
function onCheckBoxClick(event) {
    console.log(event.currentTarget.checked);
    if (event.currentTarget.checked) {
    changeClass("light", "dark");
        savedLs(LS_KEY.theme, "dark");
    } else {
        changeClass("dark", "light");
        savedLs(LS_KEY.theme, "light");
}  
}

function setThemeOnLoad() {
    const lsData = localStorage.getItem(LS_KEY.theme);
    if (lsData) {
        if (lsData === "dark") {
           changeClass("light", "dark");
            refs.checkBox.checked = true;
    
        }
        
    } else {
        changeClass("dark", "light");
    savedLs(LS_KEY.theme, "light");

        
    }
};

