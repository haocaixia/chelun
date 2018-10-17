import {getImgList,getCategoryImgList} from '../../api/index';
const state = {
    imgList: [],
    imgList2: [],
    Page: 1,
    isFetching: false,
    current:0
}

const mutations = {
    /**
     *  做数据处理
     * @param {*} state
     * @param {*} payload
     */
    updateImgList(state, payload){
        state.imgList = payload;
    },
    updateImgList2(state, payload){
       
        state.imgList2 = state.imgList2.concat(payload.List);
        state.Page++;
        state.isFetching = false;
    },
    startFetching(state){
        state.isFetching = true;
    },
    getCurrent(state,payload){
        console.log(payload)  
        state.current=payload
    }
}

const actions = {
    getCategoryImgList1({commit}, payload){
        
        getImgList(payload).then(res=>{
          
            commit('updateImgList', res.data);
        })
    },
    getCategoryImgList2({commit, state}, payload){
      
        payload.Page = state.Page;
        if (state.isFetching){
            return;
        }
        commit('startFetching');
        getCategoryImgList(payload).then(res=>{
        
            commit('updateImgList2', res.data);
        })
    },
    getCurrentData({commit},payload){
        console.log(payload)  
        commit('getCurrent', payload);
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
