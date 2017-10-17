<template>
  	<div class="customer">
  		
	  	<h3 class="my-4">Customers</h3>

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
					<tr v-for="(customer, key) in customers">
					  	<td>{{key+1}}</td>
					  	<td>{{customer.name}}</td>
					  	<td>{{customer.create_at}}</td>
					  	<td>
						  	<a :href="'/admin/customer/edit/' + customer.id" class="btn btn-warning">
						  		<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
						  	</a>
						</td>
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
      		customers: ''
		}
  	},
    created() {

    this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/customers').then((response) => {

        if (response.status == 200) {
            if (response.data.status) {
              	this.customers = response.data.data
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

