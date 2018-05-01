
/////// HELLO VUE EXAMPLE ///////
const helloVue = new Vue({
  el: '#hello-vue',
  data: {
    title: 'Hello World!',
    message: 'This is my first Vue template!'
  }
});

const example = new Vue({
  el: '#example',
  data: {
    title: 'Hello again',
    message: "Adding another piece of data is easy!",
    name: "Thor",
    image: "https://placeimg.com/200/200/nature",
    alt: "Currently a placeholder image.",
    isDisabled: true,
  },
  methods: {
    sayHello: function(){
      alert(this.title);
    },
    enableButton: function(){
      this.isDisabled = false; 
    }
  }
});

///////////// SINGLE MEDIA ITEM ///////////

const bookDetail = new Vue({
  el: '#book-detail',
  data: {
    title: 'The Sirens of Titan',
    author: 'Kurt Vonnegut',
    summary: 'This is a summary of the Sirens of Titan.',
    type: 'book',
    showDetail: false
  },
  methods: {
    toggleDetails: function(){
      this.showDetail = !this.showDetail;
    }
  }
});

///////////////// DISPLAYING AN ARRAY //////////////////////

const colorsOfTheRainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const arrExample = new Vue({
  el: "#colors", 
  data: {
    rainbow: colorsOfTheRainbow
  }
});
///////////////// DISPLAYING AND SORTING A LIST ////////////
const mediaList = 
  [
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

const app = new Vue({
  el: '#media-list',
  data: {
    title: 'Treehouse Public Library',
    type: '',
    mediaList: mediaList
  },
  methods: {
    toggleDetails: function(media){
      media.showDetail = !media.showDetail;
    },
    filterList: function(){
      this.type = event.target.value;
    }
  }, 
  computed: {
    uniqueItemsList: function(){
      const tags = [];
      this.mediaList.forEach((item) => {
        if (!tags.includes(item.tag)){
          tags.push(item.tag);
        }
      });
      return tags;
    }
  }
});

