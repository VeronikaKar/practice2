export
function createGalleryMarkup(array) {
  return array
    .map(
      (image) =>
        `<li class="gallery-item">
        <img src="${image.urls.small}" alt="${image.description}">
      </li>`
    )
    .join("");
}