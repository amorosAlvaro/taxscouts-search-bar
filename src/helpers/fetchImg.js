/* eslint-disable no-debugger */
/* eslint-disable implicit-arrow-linebreak */

function fetchImg(url) {
  console.log('fetchImg recived url:', url);
  let bookImgLink;
  fetch(url)
    .then((response) =>
      // When the page is loaded convert it to text
      response.text())
    .then((html) => {
      // Initialize the DOM parser
      const parser = new DOMParser();

      // Parse the text
      const doc = parser.parseFromString(html, 'text/html');
      console.log('Document:', doc);

      // You can now even select part of that html as you would in the regular DOM
      // Example:
      // var docArticle = doc.querySelector('article').innerHTML;
      const bookImg = doc.getElementsByClassName('s-image');
      console.log('bookImg:', bookImg);
      bookImgLink = bookImg[0].src;
      console.log('Book link in helper:', bookImgLink);
    })
    .catch((err) => {
      console.log('Failed to fetch page: ', err);
    });
  console.log('Book link in helper return:', bookImgLink);

  return bookImgLink;
}

export default fetchImg;
