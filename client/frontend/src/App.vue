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
      //AJAX_URL: 'http://192.168.0.15/~user11',
      //assetUrl: 'http://192.168.0.15/~user11/book/server/api/shop/assets/',
      //assetAutoUrl: 'http://192.168.0.15/~user11/book/server/api/shop/assets/auto/',
      AJAX_URL: 'http://courses.site',
      assetUrl: 'http://courses.site/book/server/api/shop/assets/',
      assetAutoUrl: 'http://courses.site/book/server/api/shop/assets/auto/',
      user: null
    }
  },
  methods: {
    login: function() {
      this.user = JSON.parse(localStorage.getItem("profile"))
    },
    logout: function() {
        localStorage.clear()
        location.href = '/';
    }
  },
  created() {
  
		this.user = JSON.parse(localStorage.getItem("profile"))
	
		if (this.user) {
			let instance = this.axios.create({
				baseURL: this.AJAX_URL
			});
			instance.defaults.headers.common['Authorization'] = this.user.access_token

			this.axios.get(this.AJAX_URL + '/book/client/api/auth')  
			.then(function (response) {
		  	if (response.status == 200) {
	            if (response.data.success) {
	            	console.log('success')
	            } else {
				console.log('error')
	              	//this.logout()
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
