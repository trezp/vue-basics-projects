
/////// HELLO VUE EXAMPLE ///////
// const helloVue = new Vue({
//   el: '#hello-vue',
//   data: {
//     title: 'Hello World!',
//     message: 'This is a message!'
//   },
//   methods: {
//     sayHello1: function(){
//       alert('Hello');
//     },
//     sayTitle: function(){
//       alert(this.title);
//     }
//   }
// });

// const helloVue2 = new Vue({
//   el: '#hello-vue2',
//   data: {
//     title: 'Also hello, world!',
//     message: 'This is also a message!',
//     message2: 'Adding another binding is easy.'
//   }
// });

///////////// SINGLE MEDIA ITEM ///////////
// Do this example, only with showDetail as well
const bookDetail = new Vue({
  el: '#book-detail',
  data: {
    title: 'The Sirens of Titan',
    author: 'Kurt Vonnegut',
    summary: "This is a summary of the Sirens of Titan.",
    type: 'book',
    showDetail: false
  },
  methods: {
    toggleDetails: function(){
      this.showDetail ? this.showDetail = false : this.showDetail = true;
    }
  }
});

///////////////// DISPLAYING A LIST/ SIMPLE ACCORDIAN ////////////
//Instead of an accordian, make a select menu that we can use to filter the list
//Probably also make a search
const app = new Vue({
  el: '#media-list',
  data: {
    title: 'The Library',
    type: 'all',
    mediaList: [
      {
        title: 'Hop on Pop', 
        description: "A delightful children's book.",
        tag: 'book',
        contributor: 'Dr. Suess',
        showDetail: false,
      },
      {
        title: 'The Joy of Painting', 
        description: "Create a world of happy little trees!",
        tag: 'video',
        contributor: 'Bob Ross',
        showDetail: false
      },
      {
        title: 'Supernatural: The Complete 12th Season', 
        description: "A (literally) neverending roadtrip.",
        tag: 'video',
        contributor: "Eric Kripke",
        showDetail: false
      },
      {
        title: 'Planet Earth II', 
        description: "Hours of beautiful but heart attack-inducing nature footage",
        tag: 'streaming video',
        contributor: 'David Attenborough',
        showDetail: false,
      },
      {
        title: 'Titanic', 
        description: "The boat sinks.",
        tag: 'video',
        contributor: 'James Cameron',
        showDetail: false,
      },
      {
        title: 'The Sirens of Titan', 
        description: "Mankind flung its advance agents ever outward, ever outward.",
        tag: 'book',
        contributor: 'Kurt Vonnegut',
        showDetail: false,
      },
      {
        title: 'Better Call Saul', 
        description: "A slow-burning Breaking Bad prequel.",
        tag: 'streaming video',
        contributor: 'someone',
        showDetail: false,
      }
    ]
  },
  methods: {
    toggleDetails: function(media){
      media.showDetail ? media.showDetail = false : media.showDetail = true;
    },
    filterList: function(){
      this.type = event.target.value;
    }
  }, 
  computed: {
    uniqueItemsList(){
      const newList = [];
      this.mediaList.forEach(function(item){
        if (!newList.includes(item.tag)){
          newList.push(item.tag)
        }
      })
      return newList;
    }
  }
});