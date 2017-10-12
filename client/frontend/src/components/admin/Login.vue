<template>
	<div class="auth">
		<h2>Login</h2>
		<form  class="auth_form" @submit.prevent="validForm">
			<p v-if="error" class="is-danger">{{error}}</p>
			<p :class="{ 'control': true }"><input v-model="email" v-validate="'required|email'" :class="{'input form-control': true, 'is-danger': errors.has('email') }" type="text" name="email" placeholder="Email"></p>
			<span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>

			<p :class="{ 'control': true }"><input v-model="password" v-validate="'required'" :class="{'input form-control': true, 'is-danger': errors.has('password') }"type="password" name="password" placeholder="Password"></p>
			<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
			
			<p><button type="submit" class="btn btn-primary">Login</button></p>
		</form>
	</div>
</template>

<script>
	export default {
  	name: 'login',
  	data() {
  		return {
			email: '',
			password: '',
			error: '',
			access: false
  		}
  	},
  	methods: {
  		validForm: function() {
  			var self = this
			this.$validator.validateAll().then((result) => {
		        if (result) {
		        	let config = {
					  headers: {
					    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
					  }
					}
	    
				    this.axios.put(this.$parent.AJAX_URL + '/rest/client/api/users', {
				    	email: this.email,
				    	password: btoa(this.password)
				    }, config)  
				    .then((response) => {

			          if (response.status == 200) {
			            if (!response.data.success) {
			              	self.error = response.data.message
			            } else {
			              	let profile = localStorage.setItem('profile', JSON.stringify(response.data.data));
			              	self.access = true
			              	this.$emit('login')
			            }
			          } else {
			            	console.log(response.data.message)
			          }
			    	})
		        }
     		});
		},
		logout: function () {
			this.email = ''
			this.password = ''
			this.access = false
			this.$emit('logout')
		}
  	},
  	created() {
  		if (this.$parent.user) {
  			this.access = true
  		}
  		
  	}
}
</script>
<style>

</style>
