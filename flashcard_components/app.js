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
  {
    'front': 'This is card 4',
    'back': 'This is the back side of card 4.',
    'active': false
  },
]

const deck2 = [
  {
    'front': 'This is from the second deck.',
    'back': 'Backside',
    'active': false
  },
  {
    'front': 'This is card 2',
    'back': 'This is the back side of card 2.',
    'active': false
  },
]


Vue.component('flash-deck', {
  template: `
    <div class="deck-container">
      <div v-for="card in deck" class="deck">
        <span>X</span>
        <flash-card class="card" :card="card"></flash-card>
      </div>
    </div>
  `,
  props: ['deck']
});

Vue.component('flash-card', {
  template: `
    <div @click="toggleCard">
      <h4 v-show="front">{{card.front}}</h4>
      <h4 v-show="!front">{{card.back}}</h4>
    </div>
  `,
  props: ['card'],
  data: function(){
    return {
      front: true
    }
  },
  methods: {
    toggleCard: function(event){
      this.front ? this.front = false : this.front = true;
    }
  }
});

const app = new Vue({
  el: '#app',
  data: function() {
    return {
      deck: deck,
      cardFront: '',
      cardBack: '',
    }
  }
});

