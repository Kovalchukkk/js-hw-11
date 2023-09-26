const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFE_SEARCH = 'true';
const PER_PAGE = 40;

export default URL_CONFIG = {
  baseUrl: process.env.BASE_URL,
  apiKey: process.env.API_KEY,
  imageType: IMAGE_TYPE,
  orientation: ORIENTATION,
  safeSearch: SAFE_SEARCH,
  perPage: PER_PAGE,
};
