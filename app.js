const image = document.querySelector('.image');
const likeLove = document.querySelector('.like-love');
const love = document.querySelector('.love');
const totalLike = document.querySelector('#like');
let counterLike = 0;

image.addEventListener('dblclick', clickImage);

function clickImage() {
  likeLove.classList.add('show-like');
  love.classList.add('like-show');
  totalLike.innerHTML = `${counterLike+1}`;

  setTimeout(() => {
    likeLove.classList.remove('show-like');
  }, 700);
};

love.addEventListener('click', myLove);

function myLove() {
  if( love.classList.contains('like-show') ) {
    love.classList.remove('like-show');
    totalLike.innerHTML = `${counterLike=0}`;
  } else {
    love.classList.add('like-show');
    totalLike.innerHTML = `${counterLike+1}`
  }
}