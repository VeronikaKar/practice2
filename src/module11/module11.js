import { list, form,loader } from "./refs.js";
import { getPhotos } from "./unsplash-.js";
import { createGalleryMarkup } from "./createMarkUp.js";
import { showLoader,hiddenLoader } from "./loader.js";
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.search.value.trim();
    showLoader();
    list.innerHTML = "";

    getPhotos(searchQuery).then(res => {
        // console.log(res);
         if (res.results.length === 0) {
        return iziToast.error({
          position: "topRight",
          message:
            "Sorry, there are no images matching your search query. Please try again!",
        });
      }
        list.innerHTML = createGalleryMarkup(res.results);
        
    }).catch(error => { console.log(error); })
     .finally(() => {
      hiddenLoader();
    });
}

