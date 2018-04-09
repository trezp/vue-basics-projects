const cards = [
  {
    'front': 'Front of card 1',
    'back': 'Back of card 1',
    'flipped': false,
  },
  {
    'front': 'Front of card 2',
    'back': 'Back of card 2',
    'flipped': false,
  },
  {
    'front': 'Front of card 3',
    'back': 'Back of card 3',
    'flipped': false,
  },
] 

//Delete cards 


Vue.component('flashcard', {
  template: `
  <transition-group name="flip" tag="li">
    <span class="card" v-bind:class="{memorized: card.memorized}" 
      v-show="!card.flipped" 
      v-bind:key="index">
      <span class="delete"><i v-on:click.native="cards.splice(index, 1)" class="material-icons">clear</i></span>    
      <p>{{card.front}}</p>
    </span>
    <span class="card" v-bind:class="{memorized: card.memorized}"
      v-show="card.flipped" 
      v-bind:key="index + 1">
      <span class="delete"><i v-on:click.native="cards.splice(index, 1)" class="material-icons">clear</i></span>
      <p>{{card.back}}</p>
    </span>
  </transition-group>
  `,
  props: ['card', 'index']
});

new Vue({
  el: '#flashcard-app',
  data: function(){
    return {
      cards: cards,
      cardFront: '',
      cardBack: ''
    }
  },
  methods: {
    toggleCard: function(card){
      card.flipped = !card.flipped;
    },
    addNew: function(){
      if(this.cardFront.length && this.cardBack.length){
        this.cards.push({
          'front': this.cardFront,
          'back': this.cardBack,
          'flipped': false
        });
        this.cardFront = '';
        this.cardBack = '';
      } else {
        console.log("Please enter something first")
      }
    }
  }
});



