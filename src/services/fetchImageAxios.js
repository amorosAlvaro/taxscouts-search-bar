import axios from 'axios';

async function fetchImageAxios(url) {
  let bookImgLink = '';

  bookImgLink = await axios.get(url);
  const stringData = bookImgLink.data;

  const element = document.createElement('div');
  element.innerHTML = stringData;
  const image = element.getElementsByClassName('s-image');
  if (image[0]) {
    return image[0].src;
  }
  return undefined;
}

export default fetchImageAxios;
