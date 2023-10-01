import './sass/main.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

import { loadMoreButton } from './js/load-button';
import getRefs from './js/get-refs';
import PhotoService from './js/photo-service';
import renderPhotoCards from './js/render-cards';

const photoService = new PhotoService();
const refs = getRefs();

const fetchCards = () => {
  console.log(`photoService.query: ${photoService.query}`);
  photoService
    .fetchCards()
    .then(cards => {
      // cards.dataHits;
      // cards.totalHits;
      // cards.currentPage;
      // TODO: Call render function

      renderPhotoCards(cards);
      lightbox.refresh();
    })
    .catch(() => Notify.failure('Sorry, some error is occured'))
    .finally(() => console.log(`fetch done`));
};

const onSearch = e => {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.searchQuery.value;

  if (searchQuery) {
    console.log(`searchQuery: ${searchQuery}`);
    photoService.query = searchQuery;
    photoService.resetPage();
    refs.cardContainer.innerHTML = '';
    fetchCards();
    return;
  }
  Notify.info(`Please enter a search query`);
};

refs.form.addEventListener('submit', onSearch);
loadMoreButton.refs.button.addEventListener('click', fetchCards);
