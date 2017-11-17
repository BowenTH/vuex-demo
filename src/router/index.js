import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tab from '@/components/HelloWorld'
import Vuex from '@/components/vuex'
import Todo from '@/components/todo'

const First = { template:'<div>first</div>' }
const Second = { template:'<div>second</div>' }

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
    }, 
    // test todo
    {
      path: '/todo',
      components:{
        default :First,
        a: First,
        b: Second,
      }
    }, 
    // test vuex
    {
      path: '/vuex',
      components: {
        default: Foo,
        a: Vuex,
        b: Baz
      }
    }

  ]
})
