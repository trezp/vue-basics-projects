

const searchBar = Vue.component('app-searchbar', {
  template: '<label>Search: <input type="text"></label>'
});

const footer = Vue.component('app-footer', {
  template: `
    <div>
      <h2 class="footer-head">This is the footer of the app!</h2>
      <nav>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </nav>
    </div>
  `
});

const home = Vue.component('app-home', {
  template: `
    <app-layout>
      <slot name="subheader"><h2>This is a subheadline for Home</h2></slot>
      <slot name="content">This is content for home.</slot>
    </app-layout>
  `
});

const about = Vue.component('app-about', {
  template: `
    <div>
      <slot name="subheader">This is the subhead for the About page.</slot>
      <slot name="content">
        <p>Content for the about page.</p>
      </slot>
    </div>
  `
});

const contact = Vue.component('app-contact', {
  template: `
    <div>
      <slot name="subheader"><h2>This is the subhead for Contact</h2></slot>
      <h3>!!!!This is some extra content!!!!</h3>
      <slot name="content">Special content for contacts component.</slot>
    </div>
  `
});

new Vue({
  el: '#root',
  components: {
    home: home,
    about: about,
    contact: contact
  },
  data: function(){
    return {
      currentView: 'home'
    }
  },
});

