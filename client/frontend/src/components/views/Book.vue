<template>
	<div class="book">
		<h3 class="my-4">{{book.name}}</h3>
		<div class="row">

			<div class="col-md-4">
				<img class="card-img-top" src="http://placehold.it/700x400" alt="">
				<p v-if="price" class="discount"> - <i class="fa fa-eur" aria-hidden="true"></i> {{book.discaunt}}</p>
				<button class="btn btn-primary btn-cart mt-20">Add Cart</button>
			</div>
			<div class="col-md-8">
				<h5>Description:</h5>
				{{book.description}}
				<h5 class="mt-20">Price:</h5>
				<span v-if="price">
					<strike><i class="fa fa-eur" aria-hidden="true"></i> {{book.price}}</strike>
					<br>New price: <i class="fa fa-eur" aria-hidden="true"></i> {{price}}
					</span>
				<span v-else>
					<i class="fa fa-eur" aria-hidden="true"></i> {{book.price}}
				</span>
				
				
				<h5 class="mt-20">Authors:</h5>
				<ul>
					<li v-for="author in book.authors">{{author.name}}</li>
				</ul>
				<h5 class="mt-20">Genres:</h5>
				<ul>
					<li v-for="genre in book.genres">{{genre.name}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>

export default {
  name: 'book',
  data () {
    return {
    	book: '',
    	price: 0
    }
  },
  created() {
  	this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/books/' + this.$route.params.id).then((response) => {

          if (response.status == 200) {
            if (response.data.status) {
              this.book = response.data.data

              if (this.book.discaunt != 0) {
              	this.price = this.book.price - this.book.discaunt
              }

            } else {
              console.log(response.data.message)
            }
          } else {
            console.log(response.data.message)
          }
    })

  }
}
</script>


<style>

</style>
