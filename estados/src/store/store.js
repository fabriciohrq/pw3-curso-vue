import Vue from 'vue';
import Vuex from 'vuex';
import carrinho from './carrinho/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { carrinho }
});