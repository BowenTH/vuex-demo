<template>
	<div id="">
		<button @click="add(10)">count++</button>
		<button @click="addAction">aciton++</button>
		{{msg}} 
		<!--用法一-->
		<!--{{$store.state.count}}-->
		count={{this.count}} 
		<hr/>
		{{sex}}
		{{age}}
		{{flag}}
		<hr />
		{{$store.other}}
	</div>
</template>

<script>
	import store from "@/store/store"
	import { mapState,mapMutations, mapGetters ,mapActions} from "vuex"
	export default{
		data(){
			return {
				msg:'hello vuex'
			}
		},
		computed:
			//用法二
//			...mapState([
//				'age','count','sex',
//			]),
			//用法三
			mapState({
				flag:state=>state.sex,
				name(){
					return 'hello name'
				},
				//用法四
				...mapState(['sex','age','count'])
			}),
		methods:{
			...mapMutations([
				'add'
			]),
			...mapGetters([
				'counting'
			]),
			...mapActions([
				'addAction'
			])
		}
	}
</script>

<style>
</style>