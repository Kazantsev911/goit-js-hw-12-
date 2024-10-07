import axios from 'axios';
// import { q, page } from '../main.js';

const API_KEY = '25786434-348adb767e319176b4ad356ea';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function searchImages(q, page) {
  const params = {
    key: API_KEY,
    q: q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page: page,
  };

  const response = await axios.get('', { params });
  return response.data;
}
