import $ from 'jquery'

$(document).ready(() => {
  // have fun!
  getTopWord()

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

// get rid of spaces and punctation and numbers
  function postWords(userInput) {
    fetch("https://wordwatch-api.herokuapp.com/api/v1/words", {
      method: "POST",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({word: {value: userInput}})
    }).then(response => {
      return response.json()
    })
    .then(jsonResponse => {
      console.log(jsonResponse)
    })
  }


  $('.top-words').on('click',() => {
    $('.top-words').css('color','orange');
  });
  let $button = $('button');
  $button.on('click',(e) => {
    e.preventDefault();
    var $userInput = $('textarea').val()
    postWords($userInput);
    getTopWord();
    // $('.stuff').append($userInput);
  });
})
