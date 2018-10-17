import {getBrandList,getMarkList,getDetailList} from '../../api/index';
const state={
    list1:[],//车辆品牌数据
    list2:[],//车系列数据

    isShowList:false
}
const mutations={
    updataList1(state,payload){
        var obj = {};
        payload.data.forEach(function(item) {
            var key = item.Spelling.substr(0, 1).toUpperCase();
            if (!obj[key]) {
                obj[key] = {
                    title: key,
                    list: []
                }
            }
            obj[key].list.push(item);
        })
        var arr = [];
        for (var k in obj) {
            arr.push(obj[k]);
        }
        //按首字母排序
        arr.sort(function(x, y) {
            return x.title.charCodeAt(0) - y.title.charCodeAt(0);
        })
        state.list1=arr;
    },
    updataList2(state,payload){
        // console.log(payload);
        state.list2=payload;
        state.isShowList=true;
      
    },

    hideList(state){
        state.isShowList=false
    }
}

const actions={
    getList1({commit}){
        getBrandList().then(res=>{
            commit('updataList1',res);
          })
    },
    getList2({commit},payload){
        //payload接受id参数
        getMarkList(payload).then(res=>{
            commit('updataList2',res);
          })  
         
    }
}
export default{
    namespaced:true,//命名空间
    state,
    mutations,
    actions
}