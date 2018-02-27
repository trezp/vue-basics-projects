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

new Vue({
  el: '#cardList',
  data: {
    cards: cards,
    cardFront: '',
    cardBack: ''
  },
  methods: {
    toggleCard: function(card){
      card.active ? card.active = false : card.active = true;
    },
    addNew: function(){
      this.cards.push({
        'front': this.cardFront,
        'back': this.cardBack,
        'active': false
      });
      this.cardFront = '';
      this.cardBack = '';
    },
  }
});