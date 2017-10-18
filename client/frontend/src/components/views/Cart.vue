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
				<tr v-for="(item, key) in data">
				  	<td>{{key+1}}</td>
				  	<td>{{item.name}}</td>
				  	<td>{{item.count}}</td>
				  	<td>{{item.price}}</td>
				  	<td>{{item.price * item.count}}</td>
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
  name: 'cart',
  data () {
    return {
    	data: ''
    }
  },
  created() {
  	if (this.$parent.$parent.user) {
		let instance = this.axios.create({
			baseURL: this.$parent.$parent.AJAX_URL
		});
		
		instance.defaults.headers.common['Authorization'] = this.$parent.$parent.user.access_token
			
		this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/cart').then((response) => {
			
          if (response.status == 200) {
            if (response.data.status) {
              this.data = response.data.data
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