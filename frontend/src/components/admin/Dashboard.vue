<template>
  	<div class="dashboard">
  	   	<!-- Navigation -->
	    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
	      <div class="container">
	        <a class="navbar-brand" href="#">Admin panel</a>
	      </div>
	    </nav>
	    <div class="container">
	      	<div class="row">
		        <div class="col-lg-3">
		          	<h3 class="my-4">Menu</h3>
			      	<div class="list-group">
			        	<a href="#/admin/authors" class="list-group-item">Authors</a>
			        	<a href="#/admin/genres" class="list-group-item">Genres</a>
			        	<a href="#/admin/books" class="list-group-item">Books</a>
			        	<a href="#/admin/users" class="list-group-item">Users</a>
			        	<a href="#/admin/orders" class="list-group-item">Orders</a>
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
  name: 'dashboard',
}
</script>


<style>

</style>