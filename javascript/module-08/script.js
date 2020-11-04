import gallery from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  modal: document.querySelector(".lightbox"),
  closeBtn: document.querySelector('button[data-action="close-lightbox"]'),
  modalImg: document.querySelector("img.lightbox__image"),
};

refs.gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    refs.modal.classList.add("is-open");
    console.dir(event.target);
    refs.modalImg.src = event.target.dataset.source;
    refs.modalImg.alt = event.target.alt;
  }
  return;
});

refs.closeBtn.addEventListener("click", () => {
  refs.modal.classList.remove("is-open");
  refs.modalImg.src = "";
  refs.modalImg.alt = "";
});



function createLi(image) {
  const li = document.createElement('li');
  li.classList.add("gallery__item");
  li.innerHTML = `<a
  class="gallery__link"
  href="${image.original}"
>
  <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="Tulips"
  />
</a>`
return li;
}

const liArrRef = gallery.map(elem => createLi(elem));
refs.gallery.append(...liArrRef);