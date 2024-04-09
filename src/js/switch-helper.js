import { LS_KEY } from "./LS_KEYS";
export function changeClass(a, b) {
    refs.body.classList.replace(a, b);
}


export function savedLs(key, value) {
    localStorage.setItem(key, value);
}

export function changeDarkTheme() {
    changeClass("light", "dark");
    savedLs(LS_KEY.theme, "dark");

}
 export function changeLightTheme() {
    changeClass("light", "dark");
    savedLs(LS_KEY.theme, "dark");

}