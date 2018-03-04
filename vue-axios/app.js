new Vue({
  el: '#app', 
  data(){
    return {
      users: {},
      title: "random users!"
    }
  }, 
  created(){
    var self = this;
    axios.get('https://randomuser.me/api/?results=10&nat=us,dk,fr,gb')
      .then(function (response) {
        console.log(response.data);
        self.users = response.data.results;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
});

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})