<template>
  	<div class="edit">
	  	<h3 class="my-4">Edit Book</h3>
		<form @submit.prevent="edit">
			<div class="form-group">
			    <label for="text">Name:</label>
			    <input type="text" class="form-control" v-default-value="book.name" v-model="name">
			</div>
			<div class="form-group">
			    <label for="text">Description:</label>
			    <textarea  class="form-control" v-default-value="book.description" v-model="description"></textarea>
			</div>
			<div class="form-group">
			    <label for="text">Price:</label>
			    <input type="text" class="form-control" v-default-value="book.price" v-model="price">
			</div>
			<div class="form-group">
			    <label for="text">Discaunt:</label>
			    <input type="text" class="form-control" v-default-value="book.discaunt" v-model="discaunt">
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
      		book: '',
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
	    
			this.axios.put(this.$parent.$parent.AJAX_URL + '/book/client/api/books/' + this.$route.params.id, {
			    	name: (this.name) ? this.name : this.genre.name
			    }, config)  
			    .then((response) => {

			        if (response.status == 200) {
			            if (!response.data.success) {
			              	console.log(response.data.message)
			            } else {
			         		location.href = '#/admin/books'
			            }
			        } else {
			            console.log(response.data.message)
			        }
		    	})
 		}
  	},
    created() {

    this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/books/' + this.$route.params.id).then((response) => {

        if (response.status == 200) {
            if (response.data.status) {
              	this.book = response.data.data
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
