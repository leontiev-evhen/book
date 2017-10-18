<template>
	<div class="cart" v-if="this.$parent.$parent.user">
		<h3 class="my-4">Cart</h3>
		<div class="row">
			<table class="table table-hover">
				<thead>
				<tr>
				 	<th>№</th>
				  	<th>Name</th>
				  	<th>Count</th>
				  	<th>Price</th>
				  	<th>Sum</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="(book, key) in books">
				  	<td>{{key+1}}</td>
				  	<td>{{book.name}}</td>
				  	<td>{{book.count}}</td>
				  	<td>{{book.price}}</td>
				  	<td>{{book.price * book.count}}</td>
				</tr>
				</tbody>
				</table>
		</div>
	</div>
	<div v-else>
		<h3 class="my-4">Cart is empty</h3>
	</div>
</template>
<script>

export default {
  name: 'book',
  data () {
    return {
    	books: ''
    }
  },
  created() {
  	if (this.$parent.$parent.user) {
		this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/cart/' + this.$parent.$parent.user.id).then((response) => {

          if (response.status == 200) {
            if (response.data.status) {
              this.books = response.data.data
            } else {
              console.log(response.data.message)
            }
          } else {
            console.log(response.data.message)
          }
    	})
  	} 
  },
  methods: {
  	
  }
}
</script>


<style>

</style>