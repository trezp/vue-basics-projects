new Vue({
  el: '#app', 
  data(){
    return {
      users: {},
      userFirst: '',
      userLast: '',
      title: "Random Users!",
      loading: true
    }
  },
  created(){
    var self = this;
    axios.get('https://randomuser.me/api/?results=10&nat=us,dk,fr,gb')
      .then(function (response) {
        self.users = response.data.results;
        console.log(response.data.results)
        self.userFirst = response.data.results[0].name.first;
        self.loading = false; 
      })
      .catch(function (error) {
        console.log(error);
      });
  },
});