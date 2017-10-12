<template>
  	<div class="edit">
	  	<h3 class="my-4">Edit customer</h3>
		<form @submit.prevent="edit">
			<div class="form-group">
			    <label for="text">Name:</label>
			    <input type="text" class="form-control" v-default-value="customer.name" v-model="name">
			</div>
			<div class="form-group">
			    <label for="text">Email:</label>
			    <input type="text" class="form-control" v-default-value="customer.email" v-model="email">
			</div>
			<div class="form-group">
			    <label for="text">Discaunt:</label>
			    <input type="text" class="form-control" v-default-value="customer.discaunt" v-model="discaunt">
			</div>
			<button type="submit" class="btn btn-default">Edit</button>
		</form>
	</div>
</template>


<script>

export default {
  	name: 'edit',
 	 data() {
		return {
      		customer: '',
      		name: '',
			email: '',
			password: '',
			discaunt: ''
		}
  	},
 	methods: {
 		edit: function() {
 			let config = {
			  	headers: {
			    	'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
			  	}
			}
	    
			this.axios.put(this.$parent.$parent.AJAX_URL + '/book/client/api/customers/' + this.$route.params.id, {
			    	name: (this.name) ? this.name : this.customer.name,
					email: (this.email) ? this.email : this.customer.email,
					password: (this.password) ? this.password : this.customer.password,
					discaunt: (this.discaunt) ? this.discaunt : this.customer.discaunt,
			    }, config)  
			    .then((response) => {

			        if (response.status == 200) {
			            if (!response.data.success) {
			              	console.log(response.data.message)
			            } else {
			         		location.href = '#/admin/customers'
			            }
			        } else {
			            console.log(response.data.message)
			        }
		    	})
 		}
  	},
    created() {

    this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/customers/' + this.$route.params.id).then((response) => {

        if (response.status == 200) {
            if (response.data.status) {
              	this.customer = response.data.data
            } else {
              	console.log(response.data.message)
            }
        } else {
            console.log(response.data.message)
        }
    })
  	},
}
</script>


<style>

</style>
