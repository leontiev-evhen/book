<template>
  	<div class="home">
	 	<top-menu></top-menu>
	    <div class="container">

	      	<div class="row">
		        <div class="col-lg-3">
		          <sidebar></sidebar>
		        </div>

		        <div class="col-lg-9">
					<router-view></router-view>
		        </div>
	        </div>
	    </div>
      	<footer></footer>
    </div>
</template>


<script>
import Sidebar from './views/Sidebar.vue'
import TopMenu from './views/TopMenu.vue'
import Footer from './views/Footer.vue'

export default {
  name: 'home',
  	data () {
	    return {
	      msg: 'Auto shop',
	      data: [],
	      auto: [],
	      filter_result: true
	    }
  	},
  	created() {
    	this.axios.get(this.$parent.AJAX_URL + '/rest/client/api/auto').then((response) => {

          if (response.status == 200) {
            if (response.data.status) {
              this.auto = response.data.data
              this.data = response.data.data
            } else {
              console.log(response.data.message)
            }
          } else {
            console.log(response.data.message)
          }
    })
  	},
  	methods: {
      	getAuto: function() {
          return this.auto
      	}
  	},
	components:{
    	Sidebar, TopMenu, Footer
  	}
}
</script>


<style>

</style>
