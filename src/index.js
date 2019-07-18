import $ from 'jquery'

$(document).ready(() => {
  // have fun!
  let $topWord = $('h1');
  $topWord.on('click',() => {
    $topWord.css('color','orange');
  });
  let $button = $('button');
  $button.on('click',() => {
    $topWord.css('color','green');
  });
})
