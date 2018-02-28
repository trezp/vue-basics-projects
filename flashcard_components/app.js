const cards = [
  {
    'front': 'This is the front side of the card.',
    'back': 'This is the back side of the card.',
    'active': false
  },
  {
    'front': 'This is card 2',
    'back': 'This is the back side of card 2.',
    'active': false
  },
  {
    'front': 'This is card 3',
    'back': 'This is the back side of card 3.',
    'active': false
  },
]

Vue.component('flash-card', {
  template: '#flashcard-template',
  props: ['cards', 'message'],
});

const app = new Vue({
  el: '#app',
  data: function() {
    return {
      cards: cards,
      cardFront: '',
      cardBack: '',
      message: 'HELLO!!!!!'
    }
  }
});