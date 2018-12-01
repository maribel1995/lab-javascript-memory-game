var cards = [{
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  },
  {
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  }
];
let memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();
let html = '';


$(document).ready(function () {

  boardInit();
  // Bind the click event of each element to a function

  $('body').delegate('.back','click', function () {
    let $card = $(this).parent();
    $card.find('.back, .front').toggleClass('back front');
    memoryGame.pickedCards.push($card);
    console.log(memoryGame.isFinished());
    if (memoryGame.pickedCards.length == 2) {
      $('.back, .front').addClass('blocked');
      const $card1 = memoryGame.pickedCards[0];
      const $card2 = memoryGame.pickedCards[1];
      const result = memoryGame.checkIfPair($card1.data(`card-name`), $card2.data(`card-name`));
      if (result) {
        $($card1, $card2).addClass('itsAMatch');
        $('.back, .front').removeClass('blocked');
      } else {
        $('.clicked').removeClass('clicked');
        setTimeout(() => {
          $($card1).find('.back, .front').toggleClass('back front')
          $($card2).find('.back, .front').toggleClass('back front')
          $('.back, .front').removeClass('blocked');
        }, 500);
      }
      $('#pairs_guessed').html(memoryGame.pairsGuessed);
      $('#pairs_clicked').html(memoryGame.pairsClicked);
      memoryGame.pickedCards = [];
    }
    setTimeout(() => {
      if (memoryGame.isFinished()) {
        alert('Voce eh bom ein!!!')
        boardInit();
      }
    }, 100)
  });
});

const boardInit = () => {
  let html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);
  memoryGame.pairsGuessed = 0;
  memoryGame.pairsClicked = 0;
}