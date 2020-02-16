'use strict';

const superagent = require('superagent');
//trying this to get access to functions on this page that may need superagent

let likeButtons = $('.upvote');
//changed to accomodate second button functionality

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

//build out get more functionality. this def doesnt work

let count = 2
let pageNum = count;

let getButton = $('.getMore');

$(getButton).on('click', loadMore(pageNum));

function loadMore(pageNum) {
  let url = `https://swapi.co/api/people/?page=${pageNum}`;
  superagent.get(url, {
    method: 'get',
    dataType: 'json'
  })
    // After we get the data from the remote API, go to the
    // Database and add the number of "likes" for each character
    // from our database, if there are any
    .then(data => {
      renderNewPage (data);
      count++;
    })
}

function renderNewPage(data) {
  let templateSource = $("#newCharTemplate").html();
  let render = Handlebars.compile(templateSource);
  let newCharHTML = render(data);

  $('.newCharDiv').html(newCharHTML);
}