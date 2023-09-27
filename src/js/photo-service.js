import axios from 'axios';
import URL_CONFIG from './constants';

class PhotoService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  async fetchCards() {
    const url = this.#createUrl(URL_CONFIG);

    try {
      const response = await axios.get(url);
      this.incrementPage();

      const currentPage = this.page - 1;
      const dataHits = response.data.hits;
      const totalHits = response.data.totalHits;

      return { dataHits, totalHits, perPage: URL_CONFIG.perPage, currentPage };
    } catch (error) {
      console.error(error);
    }
  }

  #createUrl({ baseUrl, apiKey, imageType, orientation, safeSearch, perPage }) {
    return `${baseUrl}?key=${apiKey}&q=${this.searchQuery}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}&page=${this.page}&per_page=${perPage}`;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

export default new PhotoService();
