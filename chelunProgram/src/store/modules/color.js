import {getColorList} from '../../api/index'

const state={
    colorList:{},
    colorName:''
}
const mutations={
    updataCityList(state,payload){
        state.colorList=payload
    },
    colorName(state,payload){
        state.colorName=payload
    }
}
const actions={
    getColorData({commit},payload){
        getColorList(payload).then(res=>{
            commit('updataCityList',res.data)
        })
    },
    getColorName({commit},payload){
       
        commit('colorName',payload)
    }
}
export default{
    namespaced:true,//命名空间
    state,
    mutations,
    actions
}