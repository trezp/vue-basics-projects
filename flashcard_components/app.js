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

// THIS IS BROKEN WAAAAH
Vue.component('flashcard-form', {
  props: ['cardFront', 'cardBack'],
  template:
  `<div>
    <label for="front">Front
      <input v-model="cardFront" type="text" id="front">
    </label>
    <label for="back">Back
      <input v-model="cardBack" type="text" id="back">
    </label>
    <button v-on:click="addNew">Add a New Card</button>
  </div>
  `
})

new Vue({
  el: '#flashCardList',
  template: `
    <div>
    <flashcard-form v-bind:cardFront="cardFront" v-bind:cardBack="cardBack"></flashcard-form>
    <ul>
      <li v-for="(card, index) in cards" class="card" v-on:click="toggleCard(card)">
        <span v-on:click="cards.splice(index, 1)">X</span>
        <p v-show="!card.active" class="front">{{card.front}}</p>
        <p v-show="card.active" class="back">{{card.back}}</p>
      </li>
    </ul>
    </div>`,
  data: {
    cards: cards,
    cardFront: '',
    cardBack: '',
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