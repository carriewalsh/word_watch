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
        $('h1').text(word)
      })
  }
  console.log(getTopWord())



  let $topWord = $('h1');
  $topWord.on('click',() => {
    $topWord.css('color','orange');
  });
  let $button = $('button');
  $button.on('click',() => {
    $topWord.css('color','green');
  });
})
