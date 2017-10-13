<template>
  	<div class="order">
  		
	  	<h3 class="my-4">Orders</h3>

  		<div class="list-group">
  			<table class="table table-hover">
				<thead>
					<tr>
						<th>№</th>
					  	<th>Name</th>
					  	<th>Create</th>
					  	<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(order, key) in orders">
					  	<td>{{key+1}}</td>
					  	<td>{{order.customer}}</td>
					  	<td>{{order.create_at}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>


<script>

export default {
  	name: 'index',
 	 data() {
		return {
      		orders: '',
			status: ''
		}
  	},
 	methods: {
 		remove: function(id) {
 			let answer = confirm('Are you sure?')
 			if (answer) {
 				this.axios.delete(this.$parent.$parent.AJAX_URL + '/book/client/api/orders/' + id).then((response) => {

			        if (response.status == 200) {
			            if (response.data.status) {
			              	location.reload()
			            } else {
			              	console.log(response.data.message)
			            }
			        } else {
			            console.log(response.data.message)
			        }
		    	})
 			}
 		}
  	},
    created() {

    this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/orders').then((response) => {

        if (response.status == 200) {
            if (response.data.status) {
              	this.orders = response.data.data
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
