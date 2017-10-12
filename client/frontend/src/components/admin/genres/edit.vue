<template>
  	<div class="edit">
	  	<h3 class="my-4">Edit Genre</h3>
		<form @submit.prevent="edit">
			<div class="form-group">
			    <label for="text">Name:</label>
			    <input type="text" class="form-control" v-default-value="genre.name" v-model="name">
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
      		genre: '',
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
	    
			this.axios.put(this.$parent.$parent.AJAX_URL + '/book/client/api/genres/' + this.$route.params.id, {
			    	name: (this.name) ? this.name : this.genre.name
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
  	},
    created() {

    this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/genres/' + this.$route.params.id).then((response) => {

        if (response.status == 200) {
            if (response.data.status) {
              	this.genre = response.data.data
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
