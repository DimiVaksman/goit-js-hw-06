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




///////////////////////// Чому коли я додаю черех метод map я отримую src та alt як undefined?

// const getImageEl = images.map((imagesItem) => {
//   const liEl = document.createElement('li');
//   liEl.classList = 'item';

//   const image = document.createElement('img');

//   image.setAttribute('id', 'image');
//   image.src = images.url; 
//   // Чомусь не працює
//   image.alt = images.alt; 
//   // Чомусь не працює

//   liEl.append(image)

//   galleryEl.append(liEl)
//   console.log(liEl)
  
// });




galleryEl.insertAdjacentHTML('afterbegin' , `
<li class="liadd"><img class="imgadd" src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="White and Black Long Fur Cat"></li>
<li class="liadd"><img class="imgadd" src="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Orange and White Koi Fish Near Yellow Koi Fish"></li>
<li class="liadd"><img class="imgadd" src="https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Group of Horses Running"></li>`  )












