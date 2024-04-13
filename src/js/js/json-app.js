import { getPosts } from "./placeholder-API.js";
import { list, loadMoreBtn } from "./refs.js";
import { createMarkUp } from "./createMarkUp";
let page = 1;
const limit = 20;
const totalPots = 100;
const lastPage = Math.ceil(totalPots / limit);
document.addEventListener("DOMContentLoaded", renderPage);
loadMoreBtn.addEventListener("click", onClickBtn)
function renderPage(params) {
    getPosts(page,limit)
        .then((res) => { list.innerHTML = createMarkUp(res) })
    .catch((error) => {console.log();})
    
}
function onClickBtn() {
    page += 1;
    getPosts(page, limit)
        .then((res) => { list.insertAdjacentHTML("beforeend", createMarkUp(res)); })
    .catch(console.log);
    if (lastPage === page) {
        loadMoreBtn.classList.add("is-hidden");
   alert("That's all!!!");
  }
}