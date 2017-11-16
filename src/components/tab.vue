<template>
	<span>
		{{title}} {{tab}} 
		{{count}}
		<!--{{this.init}}-->
	</span>
</template>

<script>
	export default {
		name:'Tab',
		props:['title'],
//		store,
		data () {
			return{
				tab:this.title 
			}
		},
		computed:{
			init(){
				return 'hello computed'
			},
			count(){
				
//				return this.$store.state.count
			}
		}
	}
</script>

<style>
</style>