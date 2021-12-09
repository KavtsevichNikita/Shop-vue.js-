import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

import shop from './shop'

export default new Vuex.Store({
  modules : {shop}
})



















// state : {
//     //можем хранить данные 

//     message : 'hello vuex'
// },
// mutations : {
//     //изменяет наш state

//     setMessage (state, message) {
//         state.message = message
//     }
// },
// actions : {
//     // изменяем state, но не напрямую, а через mutations
//     setMessage ({commit}, payload) {
//         commit('setMessage', payload)
//     }
// },
// getters : {
//     //забираем значение
    
//     getMessage (state) {
//         return state.message
//     }
// },