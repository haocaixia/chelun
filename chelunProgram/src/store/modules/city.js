import {getCity} from '../../api/index'

const state={
    cityList:[]
}
const mutations={
    updataCityList(state,payload){
        state.cityList=payload
    }
}
const actions={
    getCityList({commit}){
        getCity().then(res=>{
           
            commit('updataCityList',res.data)
        })
        
    }
}
export default{
    namespaced:true,//命名空间
    state,
    mutations,
    actions
}