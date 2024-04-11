import { loader } from "./refs.js";
export function showLoader() {
  loader.classList.remove("is-hidden");
}

export function hiddenLoader() {
  loader.classList.add("is-hidden");
}