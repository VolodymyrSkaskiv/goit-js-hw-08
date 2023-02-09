// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// import { galleryItems } from './gallery-items.js';

// Change code below this line

const cardMarkup = makeGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', cardMarkup);

function makeGalleryMarkup(cards) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="large-image.jpg"
        alt="${description}"
        />
    </a>
    </div>
    `;
    })
    .join('');
}

//Делегування

galleryContainer.addEventListener('click', onChangeImageSrc);

function onChangeImageSrc(evt) {
  //переформатовуємо закінчення файла  _340.jpg у 1280.jpg
  let srcImg = evt.target.src;
  srcImg = srcImg.slice(0, srcImg.length - 8) + '1280.jpg';
  openModal(srcImg);
}

function openModal(link) {
  const instance = basicLightbox.create(`
      <div class="modal">
        <img width="1400" height="900" src="${link}">
      </div>
    `);
  instance.show();
  window.addEventListener('keydown', onclickEscape);
}

function onclickEscape(evt) {
  if (evt.key !== 'Escape') {
    return;
  }

  window.removeEventListener('keydown', onclickEscape);
  const closeModal = document.querySelector('.basicLightbox--visible');
  closeModal.remove('basicLightbox--visible');
}
