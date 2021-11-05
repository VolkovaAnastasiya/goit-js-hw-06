const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('.gallery');

images.map(({url, alt}) => { galleryEl.insertAdjacentHTML(
  'beforeend',    `<li><img src = "${url}" alt = "${alt}"  width = 340  /></li>`)});
console.log(galleryEl);






// const galleryEl = document.querySelector('.gallery');
// const newImgArray = images.map(({url, alt}) => {

// const liEl = document.createElement('li');
// const imgEl = document.createElement('img');
// imgEl.src = `${url}`;
// imgEl.alt = `${alt}`;
// imgEl.width = 320;

// liEl.appendChild(imgEl);
// galleryEl.append(liEl)
// return galleryEl;
// })

// console.log(galleryEl)

