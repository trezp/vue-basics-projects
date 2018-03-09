const deck = [
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

const deck2 = [
  {
    'front': 'What is the shortcut to bind a class to an element?',
    'back': 'Answer',
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
  props: ['decks'],
  methods: {
    pleaseDelete: function(card){
      console
    }
  }
});

const app = new Vue({
  el: '#app',
  data: function() {
    return {
      decks: [deck, deck2],
      cardFront: '',
      cardBack: '',
    }
  },
  methods: {
    handleDelete: function(card){
      console.log(card.front);
    }
  }

});

