const cards = [
  {
    'front': 'Front of card 1',
    'back': 'Back of card 1',
    'flipped': false,
    'memorized': false,
  },
  {
    'front': 'Front of card 2',
    'back': 'Back of card 2',
    'flipped': false,
    'memorized': false,
  },
  {
    'front': 'Front of card 3',
    'back': 'Back of card 3',
    'flipped': false,
    'memorized': false,
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
      card.flipped ? card.flipped = false : card.flipped = true;
    },
    addNew: function(){
      if(this.cardFront.length && this.cardBack.length){
        this.cards.push({
          'front': this.cardFront,
          'back': this.cardBack,
          'flipped': false,
          'memorized': false
        });
        this.cardFront = '';
        this.cardBack = '';
      } else {
        console.log("Please enter something first")
      }
      
    },
    memorized: function(card){
      card.flipped = false;
      card.memorized = !card.memorized;
    }
  }
});