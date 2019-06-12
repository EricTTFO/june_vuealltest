import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      userInfo: {
        email: '895436674@qq.com'
      }
    },
    modules: {
      cart,
      products
    }
})

// 使用常量替代Mutation事件类型
//store.js
// import Vuex from 'vuex'
// import { SOME_MUTATION } from './mutation-types'
// const store = new Vuex.Store({
//   state: {...},
//   mutations: {
//     使用es2015风格的计算属性命名功能来使用一个常量作为函数名
//     [SOME_MUTATION] (state){
//       mutate state
//     }
//   }
// })

// Module
// 开启命名空间 namespaced: true
// 嵌套模块不要过深，尽量扁平化
// 灵活应用createNamespacedHelpers