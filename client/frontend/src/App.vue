<template>
  <div id="app">
    <router-view @login="login" @logout="logout"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      AJAX_URL: 'http://192.168.0.15/~user11',
      //AJAX_URL: 'http://bookshop.site/~user11',
      BASE_URL: 'http://192.168.0.15/~user11/book',
      //BASE_URL: 'http://bookshop.site/~user11/book',
      user: null
    }
  },
  methods: {
    login: function() {
      this.user = JSON.parse(localStorage.getItem("profile"))
    },
    logout: function() {
        delete localStorage["profile"]
        location.href = this.BASE_URL;
    }
  },
  created() {
    let self = this
		this.user = JSON.parse(localStorage.getItem("profile"))
	
		if (this.user) {
			let instance = this.axios.create({
				baseURL: this.AJAX_URL
			});
			instance.defaults.headers.common['Authorization'] = this.user.access_token

			this.axios.get(this.AJAX_URL + '/book/client/api/auth')  
			.then(function (response) {
		  	if (response.status == 200) {
	            if (!response.data.success) {
	              	self.logout()
	            }
	      	} else {
	        	console.log(response.data.message)
	      	}
			})
		}
  		 
  },
  components: {
    
  }
}
</script>

<style>

</style>
