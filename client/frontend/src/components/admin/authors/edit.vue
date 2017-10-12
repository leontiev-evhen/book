<template>
  	<div class="author">
	  	<h3 class="my-4">Edit Author</h3>
		<form @submit.prevent="edit">
			<div class="form-group">
			    <label for="text">Name:</label>
			    <input type="text" class="form-control" v-default-value="author.name" v-model="name">
			</div>
			<button type="submit" class="btn btn-default">Edit</button>
		</form>
	</div>
</template>


<script>

export default {
  	name: 'author',
 	 data() {
		return {
      		author: '',
      		name: ''
		}
  	},
 	methods: {
 		edit: function() {
 			let config = {
			  	headers: {
			    	'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
			  	}
			}
	    
			this.axios.put(this.$parent.$parent.AJAX_URL + '/book/client/api/authors/' + this.$route.params.id, {
			    	name: (this.name) ? this.name : this.author.name
			    }, config)  
			    .then((response) => {

			        if (response.status == 200) {
			            if (!response.data.success) {
			              	console.log(response.data.message)
			            } else {
			         		location.href = '#/admin/authors'
			            }
			        } else {
			            console.log(response.data.message)
			        }
		    	})
 		}
  	},
    created() {

    this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/authors/' + this.$route.params.id).then((response) => {

        if (response.status == 200) {
            if (response.data.status) {
              	this.author = response.data.data
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
