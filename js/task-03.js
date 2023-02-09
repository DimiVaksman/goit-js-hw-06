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



const galleryEl = document.querySelector('.gallery')

const getImageEl = images.map(imagesItem => {
  const liEl = document.createElement('li');
  liEl.classList.add('liadd');

  const imageEl = document.createElement('img');
  imageEl.classList.add('imgadd')
  imageEl.src = imagesItem.url; 
  imageEl.alt = imagesItem.alt;
  
  // liEl.append(imageEl)
  // galleryEl.append(liEl)

  galleryEl.insertAdjacentHTML("beforeend", `<li class="liadd"><img class="imgadd" scr = '${imageEl.src}' alt = '${imageEl.alt}'></li>`)

  // чомусь коли добавляю через insertAdjacentHTML не підгружає картинки, в чому проблема?

  console.log(liEl)
  
});









