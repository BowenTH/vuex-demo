
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store ({
	state:{
		count :4,
		age : 25,
		sex: 'female',
	},
	// store事件
	mutations:{
		add(state,n){
			console.info('mutations');
			state.count += n;
		}
	},
	// 过滤
	getters:{
		counting:function(state){
			return state.count+=1000
		}
	},
	// 异步事件
	actions:{
		addAction(context){
			setTimeout(()=>{
				context.commit('add',10)
			},3000);
			console.log('打印啦')
		},
		reduceAction({ commit }){
			commit('reduce')
		}
	}
})
