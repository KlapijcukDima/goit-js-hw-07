import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createItemEl(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click', onModalWindowClick);

function createItemEl(event) {
    return event.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    }).join('');
  }


  function onModalWindowClick(evn) {
    evn.preventDefault();
    if (evn.target.nodeName !== 'IMG') {
      return;
    }
    console.log(evn.target)
  
    const currentImgUrl = evn.target.dataset.source;
  
    const instance = basicLightbox.create(
      `
          <img src="${currentImgUrl}" width="1280" height="auto"/>
          `,
    );
    instance.show();

  }
  


