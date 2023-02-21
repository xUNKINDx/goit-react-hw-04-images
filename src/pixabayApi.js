import axios from 'axios';

const API_KEY = '32843722-0ef105cddfccbed0a9837eafd';
const URI = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';
const PER_PAGE = '12';

async function getImages(searchText, page) {
  const query = encodeURIComponent(searchText.replace(' ', '+'));

  const url = `${URI}?key=${API_KEY}&q=${query}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}
              &per_page=${PER_PAGE}&page=${page}`;

  const response = await axios.get(url);
  const images = response.data.hits.map(image => ({
    id: image.id,
    previewURL: image.webformatURL,
    imageURL: image.largeImageURL,
    tags: image.tags,
  }));

  return { images, totalHits: response.data.totalHits };
}

export { getImages };
