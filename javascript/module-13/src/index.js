import './styles.css';
import apiService from './js/apiService.js';
import refs from './js/refs.js';
import debounce from 'lodash.debounce';
import templateGallery from './templates/templateGallery.hbs';

refs.search.addEventListener(
  'input',
  debounce(e => {
    apiService.query = e.target.value;
    apiService
      .toGetFetch()
      .then(data => (refs.gallery.innerHTML = templateGallery(data)));
  }, 500),
);


refs.loadMoreBtn.addEventListener('click', () => {
    apiService.setPage();

    apiService
      .toGetFetch()
      .then(data => refs.gallery.insertAdjacentHTML('beforeend', templateGallery(data)));
});