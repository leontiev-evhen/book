<template>
  	<div class="layout">
  	   	<!-- Navigation -->
	    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
	      <div class="container">
	        <a class="navbar-brand" :href="link + '/admin'">Admin panel</a>
	        <a class="navbar-brand" @click="logout" href="#">Logout</a>
	      </div>
	    </nav>
	    <div class="container">
	      	<div class="row">
		        <div class="col-lg-3">
		          	<h3 class="my-4">Menu</h3>
			      	<div class="list-group">
			      		<div class="list-group-item">
			      			<a :href="link + '/admin'" >
				        		<i class="fa fa-dashboard fa-fw" aria-hidden="true"></i> Dashboard
				        	</a>
			      		</div>
			      		<div class="list-group-item">
			      			<a :href="link + '/admin/authors'" >
				        		<i class="fa fa-pencil" aria-hidden="true"></i> Authors
				        	</a>
							<a :href="link + '/admin/author/create'" class="btn btn-primary btn_add">
  								<i class="fa fa-plus" aria-hidden="true"></i>
  							</a>
			      		</div>
			        	<div class="list-group-item">
			      			<a :href="link + '/admin/genres'" >
				        		<i class="fa fa-leaf" aria-hidden="true"></i> Genres
				        	</a>
							<a :href="link + '/admin/genre/create'" class="btn btn-primary btn_add">
  								<i class="fa fa-plus" aria-hidden="true"></i>
  							</a>
			      		</div>
						<div class="list-group-item">
			      			<a :href="link + '/admin/books'" >
				        		<i class="fa fa-book" aria-hidden="true"></i> Books
				        	</a>
							<a :href="link + '/admin/book/create'" class="btn btn-primary btn_add">
  								<i class="fa fa-plus" aria-hidden="true"></i>
  							</a>
			      		</div>
						<div class="list-group-item">
			      			<a :href="link + '/admin/customers'" >
				        		<i class="fa fa-users" aria-hidden="true"></i> Customers
				        	</a>
							<a :href="link + '/admin/customer/create'" class="btn btn-primary btn_add">
  								<i class="fa fa-plus" aria-hidden="true"></i>
  							</a>
			      		</div>
			      		<div class="list-group-item">
			      			<a :href="link + '/admin/orders'" >
				        		<i class="fa fa-shopping-cart" aria-hidden="true"></i> Orders
				        	</a>
			      		</div>
			      	</div>
			    </div>
		       

		        <div class="col-lg-9">
					<router-view></router-view>
		        </div>
		    </div>
	    </div>
	</div>
</template>


<script>

export default {
	name: 'layout',
	data() {
		return {
			link: this.$parent.BASE_URL
		}
	},
  created() {
		if (!localStorage['admin']) {
			location.href = this.link + '/admin/login';
		}
  },
  methods: {
  		logout: function() {
  			localStorage.clear();
  			location.href = this.link + '/admin/login';
  		}
  }
}
</script>


<style>

</style>