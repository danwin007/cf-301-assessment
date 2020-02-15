'use strict';

let likeButtons = $('button');

for (let i = 0; i < likeButtons.length; i++) {
  // likeButtons[i].addEventListener('click', likeMe);
  $(likeButtons[i]).on('click',likeMe);
}

function likeMe(e) {
  let character = e.target.parentNode;
  let counter = character.getElementsByTagName('span')[0];
  // let counter = $('span:parent')[0];
  // tried to garget with the above $, didnt work!
  let count = parseInt(counter.textContent);
  count++;
  counter.textContent = count;
}
