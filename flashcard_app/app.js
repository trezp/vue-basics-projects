const cards = [
  {
    'front': 'v-text',
    'back': 'Directive: inserts text into the DOM',
    'flipped': false,
    'memorized': false,
  },
  {
    'front': '@',
    'back': 'Shorthand for an event: @click',
    'flipped': false,
    'memorized': false,
  },
  {
    'front': 'v-bind',
    'back': 'Shorthand :',
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