<template>
  	<div class="edit">
	  	<h3 class="my-4">Edit customer</h3>
		<form @submit.prevent="edit">
			<div class="form-group">
			    <label for="text">Name:</label>
				<p :class="{ 'control': true }"><input v-model="name" v-validate="'required|alpha'" :class="{'input form-control': true, 'is-danger': errors.has('name') }" type="text" name="name" v-default-value="customer.name"></p>
				<span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
			</div>
			<div class="form-group">
			    <label for="text">Email:</label>
				<p :class="{ 'control': true }"><input v-model="email" v-validate="'required|alpha'" :class="{'input form-control': true, 'is-danger': errors.has('email') }" type="text" name="email" v-default-value="customer.email"></p>
				<span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
			</div>
			<div class="form-group">
			    <label for="text">Password:</label>
				<p :class="{ 'control': true }"><input v-model="password" v-validate="'required|alpha'" :class="{'input form-control': true, 'is-danger': errors.has('password') }" type="password" name="password"></p>
				<span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
			</div>
			<div class="form-group">
				<label for="text">Repeat password:</label>
				<p :class="{ 'control': true }"><input v-model="repeat_password" v-validate="'required|confirmed:password'" :class="{'input form-control': true, 'is-danger': errors.has('repeat_password') }"type="password" name="repeat_password" data-vv-as="password"></p>
				<span v-show="errors.has('repeat_password')" class="help is-danger">{{ errors.first('repeat_password') }}</span>
			</div>
			<div class="form-group">
			    <label for="text">Discaunt:</label>
			    <input type="text" class="form-control" v-default-value="customer.discaunt" v-model="discaunt">
			</div>
			<div class="form-group">
				<label for="text">Status:</label>
				<select class="form-control" id="" v-model="status">
					<option value="1">Active</option>
					<option value="0">Inactive</option>
				</select>
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
			repeat_password: '',
			discaunt: '',
			status: ''
		}
  	},
 	methods: {
 		edit: function() {
		this.$validator.validateAll().then((result) => {
		        if (result) {
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
							status: (this.status) ? this.status : this.customer.status,
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
     		});
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
