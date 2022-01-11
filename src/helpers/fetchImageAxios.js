import axios from 'axios';

async function fetchImageAxios(url) {
  let bookImgLink = '';
  let assignValue = '';

  bookImgLink = await axios.get(url);
  const stringData = bookImgLink.data;

  const element = document.createElement('div');
  element.innerHTML = stringData;
  const image = element.getElementsByClassName('s-image');
  assignValue = image[0].src;
  return assignValue;
}

export default fetchImageAxios;
