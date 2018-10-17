import Vue from 'vue';
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger';
//引入模块
import index from './modules/index';
import detail from './modules/detail';
import city from './modules/city';
import img from './modules/img';
import color from './modules/color';
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        index,
        detail,
        city,
        img,
        color
    },
    plugins:[Logger()]
})
