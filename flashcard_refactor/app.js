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

Vue.component('flashcard', {
  template: `
    <transition-group name="flip" tag="li">
      <span class="card" 
        v-on:click="flipCard(card)"
        v-show="!card.flipped" 
        v-bind:key="index">
        <span class="delete-card" v-on:click="$emit('delete-card')"><i class="material-icons">clear</i></span>    
        <p>{{card.front}}</p>
      </span>
      <span class="card"
        v-on:click="flipCard(card)"
        v-show="card.flipped" 
        v-bind:key="index + 1">
        <span class="delete-card" v-on:click="$emit('delete-card')"><i class="material-icons">clear</i></span>
        <p>{{card.back}}</p>
      </span>
    </transition-group>
  `,
  props: ['card', 'index'],
  methods: {
    flipCard: function(card){
      card.flipped = !card.flipped;
    }
  }
});

new Vue({
  el: '#flashcard-app',
  data: function(){
    return {
      cards: cards,
      front: '',
      back: '',
      error: false
    }
  },
  methods: {
    addNew: function(){
      if(this.front.length && this.back.length){
        this.cards.push({
          'front': this.front,
          'back': this.back,
          'flipped': false
        });
        this.front = '';
        this.back = '';
        this.error = false;
      } else {
        this.error = true;
      }
    },
    handleDelete: function(index){
      this.cards.splice(index,1);
    }
  }
});



