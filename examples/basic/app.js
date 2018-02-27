
/////// HELLO VUE EXAMPLE ///////
const helloVue = new Vue({
  el: '#hello-vue',
  data: {
    title: 'Hello World!',
    message: 'This is a message!'
  },
  methods: {
    sayHello1: function(){
      alert('Hello');
    },
    sayHello2: function(){
      alert(this.message);
    }
  }
});

const helloVue2 = new Vue({
  el: '#hello-vue2',
  data: {
    title: 'Also hello, world!',
    message: 'This is also a message!',
    message2: 'Adding another binding is easy.'
  }
});

///////////// SINGLE MEDIA ITEM ///////////
// Do this example, only with showDetail as well
const bookDetail = new Vue({
  el: '#book-detail',
  data: {
    title: 'The Sirens of Titan',
    author: 'Kurt Vonnegut',
    summary: "This is a summary of the Sirens of Titan.",
    type: 'book'
  }
});

///////////////// DISPLAYING A LIST/ SIMPLE ACCORDIAN ////////////
const mediaList = new Vue({
  el: '#media-list',
  data: {
    title: 'The Library',
    mediaList: [
      {
        title: 'Hop on Pop', 
        type: 'book',
        contributor: 'Dr. Suess',
        showDetail: false,
      },
      {
        title: 'The Joy of Painting', 
        type: 'streaming video',
        contributor: 'Bob Ross',
        showDetail: false,
      },
      {
        title: 'Supernatural: The Complete 12th Season!!!!', 
        type: 'DVD!!!!',
        contributor: "   oijoij",
        showDetail: false,
        
      },
      {
        title: 'Titanic', 
        type: 'streaming video',
        contributor: 'James Cameron',
        showDetail: false,
      },
    ]
  },
  methods: {
    toggleDetails: function(media){
      media.showDetail ? media.showDetail = false : media.showDetail = true;
    }
  }
});