new Vue({
  el: '#app', 
  data(){
    return {
      users: {},
      title: "Random Users!",
      loading: true
    }
  },
  created(){
    var self = this;
    axios.get('https://randomuser.me/api/?results=10&nat=us,dk,fr,gb')
      .then(function (response) {
        console.log(response.data);
        self.users = response.data.results;
        self.loading = false; 
      })
      .catch(function (error) {
        console.log(error);
      });
  },
});