import { Notify } from 'notiflix/build/notiflix-notify-aio';

import initializePhotoCard from './templates';
import refs from './get-refs';
import { loadMoreButton } from './load-button';
import smoothScroll from './scroll';

export default renderPhotoCards = ({
  dataHits,
  totalHits,
  PER_PAGE,
  currentPage,
}) => {
  if (dataHits.length) {
    //TODO: render photo cards inside gallery

    const cards = dataHits.map(card => initializePhotoCard(card));
    const text = cards.join('');
    refs.cardContainer.insertAdjacentHTML('beforeend', text);

    loadMoreButton.enable();
    loadMoreButton.show();

    //TODO: smoothScroll

    if (currentPage > 1) {
      smoothScroll();
    }

    //TODO: message if user scrolled to the end of collection

    if (currentPage === Math.ceil(totalHits / PER_PAGE)) {
      console.log('END');
      loadMoreButton.hide();
      Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );
      return;
    }

    if (currentPage === 1) {
      Notify.info(`Hooray! We found ${totalHits} images.`);
    }

    return;
  }
  loadMoreButton.hide();
  Notify.warning(
    `Sorry, there are no images matching your search query. Please try again.`
  );
};
