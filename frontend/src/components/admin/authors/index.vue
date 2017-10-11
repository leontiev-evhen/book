<template>
  	<div class="author">
  		<h3 class="my-4">Authors</h3>
  		<button type="button" class="btn btn-primary">Create author</button>
  		<div class="list-group">
		  	<div class="list-group-item">
		  	<a @click="collapsed = !collapsed">First item</a>
			<transition name="fade">
			<div v-show="collapsed">
				First item
				<p @click="close($event)">hide</p>
			</div>
			</transition>
		  	<a href="#" class="btn btn-warning">Edit</a>
			<button type="button" class="btn btn-danger">Delete</button>
		
			
			
		  	</div>
			
		  	<div class="list-group-item">
				<a @click="open($event)">Second item</a>
				<transition name="fade">
			<div v-show="false">
				Second item
				<p @click="close($event)">hide</p>
			</div>
			</transition>
			</div>
			
		  	<a href="#" class="list-group-item">Third item</a>
			
			
			<div v-for="slider in slideritems">
    <div v-if="!slider.showEdit" @click="openEditor(slider)">
        Normal list item, click to show edit options
    </div>
    <div v-if="slider.showEdit">
        <div @click="closeEditor(slider)">Close</div>
        Edit options (if selected)
    </div>
</div>
		</div>
	</div>
</template>


<script>

export default {
  name: 'author',
  data() {
	return {
		collapsed: false,
		elem: '',
		slideritems: [
        { showEdit: false},
        { showEdit: false}
      ],
	}
  },
  methods: {
	    open(event) {
			this.elem = event.target.nextElementSibling
			this.elem.style.display = 'block'
    },
    close(event) {
		this.elem.style.display = 'none'
    }
  }
}
</script>


<style>

</style>