<template>
  	<div class="home">
	 	<top-menu  @login="login" @logout="logout"></top-menu>
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
      	<bottom></bottom>
    </div>
</template>


<script>
import Sidebar from './views/Sidebar.vue'
import TopMenu from './views/TopMenu.vue'
import Bottom from './views/Bottom.vue'

export default {
  name: 'layout',
  	data () {
	    return {
	    }
  	},
  	methods: {
  		login: function() {
	      this.$emit('login')
	    },
	    logout: function() {
	        this.$emit('logout')
	    }
  	},
	components:{
    	Sidebar, TopMenu, Bottom
  	}
}
</script>


<style>

</style>
