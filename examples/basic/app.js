
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
const mediaList = new Vue({
  el: '#media-list',
  data: {
    title: 'The Library',
    type: 'all',
    mediaList: [
      {
        title: 'Hop on Pop', 
        type: 'book',
        contributor: 'Dr. Suess',
        showDetail: false,
      },
      {
        title: 'The Joy of Painting', 
        type: 'streaming',
        contributor: 'Bob Ross',
        showDetail: false,
      },
      {
        title: 'Supernatural: The Complete 12th Season!!!!', 
        type: 'streaming',
        contributor: "   oijoij",
        showDetail: false,
        
      },
      {
        title: 'Titanic', 
        type: 'streaming',
        contributor: 'James Cameron',
        showDetail: false,
      },
      {
        title: 'The Sirens of Titan', 
        type: 'book',
        contributor: 'Kurt Vonnegut',
        showDetail: false,
      },
    ]
  },
  methods: {
    toggleDetails: function(media){
      media.showDetail ? media.showDetail = false : media.showDetail = true;
    },
    filterList: function(){
      this.type = event.target.value;
    }
  }
});