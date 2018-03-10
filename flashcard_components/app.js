
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
  data: {
    deck: '',
    cardFront: '',
    cardBack: '',
    activeDeck: ''
  },
  created: function() {
    this.setActiveDeck('data.json');
  },
  methods: {
    setActiveDeck: function(req){
      axios.get(req).then((response)=>{
        this.deck = response.data
      });
    }
  }
});

