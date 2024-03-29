export default initializePhotoCard = ({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => `<div class="photo-card">
    <a class="photo-card__link" href="${largeImageURL}" target="_blank" rel="noopener noreferrer">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
             <b>Likes</b>
             <span class="info__fetched">${likes}</span>
          </p>
          <p class="info-item">
             <b>Views</b>
             <span class="info__fetched">${views}</span>
          </p>
          <p class="info-item">
             <b>Comments</b>
             <span class="info__fetched">${comments}</span>
          </p>
          <p class="info-item">
             <b>Downloads</b>
             <span class="info__fetched">${downloads}</span>
          </p>
        </div>
    </a>
</div>`;
