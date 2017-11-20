import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        key: value
    },
    getters: {
        value: value => {
            return state.value;
        }
    },
    actions: {
        updateValue({commit}, payload) {
            commit(updateValue, payload);
        }
    },
    mutations: {
        updateValue(state, payload) {
            state.value = payload;
        }
    },
});