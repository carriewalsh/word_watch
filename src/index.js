import $ from 'jquery'

$(document).ready(() => {
  // have fun!

  function getTopWord() {
    const word = ""
    fetch("https://wordwatch-api.herokuapp.com/api/v1/top_word")
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        const word = Object.keys(jsonResponse["word"])[0]
        const count = jsonResponse["word"][word]
        $('.top-words').text(word + ' - ' + count)
      })
  }
  console.log(getTopWord())



  let $topWord = $('h1');
  $('.top-words').on('click',() => {
    $('.top-words').css('color','orange');
  });
  let $button = $('button');
  $button.on('click',() => {
    $('.top-words').css('color','green');
  });
})
