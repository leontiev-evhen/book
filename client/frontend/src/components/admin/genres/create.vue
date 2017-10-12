<template>
  	<div class="create">
	  	<h3 class="my-4">Create Genre</h3>
		<form @submit.prevent="create">
			<div class="form-group">
			    <label for="text">Name:</label>
			    <input type="text" class="form-control" v-model="name">
			</div>
			<button type="submit" class="btn btn-default">Create</button>
		</form>
	</div>
</template>


<script>

export default {
  	name: 'create',
 	 data() {
		return {
      		name: ''
		}
  	},
 	methods: {
 		create: function() {
 			let config = {
			  	headers: {
			    	'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
			  	}
			}
	    
			this.axios.post(this.$parent.$parent.AJAX_URL + '/book/client/api/genres', {
			    	name: this.name
			    }, config)  
			    .then((response) => {

			        if (response.status == 200) {
			            if (!response.data.success) {
			              	console.log(response.data.message)
			            } else {
			         		location.href = '#/admin/genres'
			            }
			        } else {
			            console.log(response.data.message)
			        }
		    	})
 		}
  	}
}
</script>


<style>

</style>
