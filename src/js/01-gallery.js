// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
// const SimpleLightbox = require('simplelightbox');

const cardMarkup = makeGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', cardMarkup);

function makeGalleryMarkup(cards) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
    <img class="gallery__image" src="${preview}" alt="" title="${description}" />
    </a>
     `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
