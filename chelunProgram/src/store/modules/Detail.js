import {getDetailList,getinquiry,getCityId} from '../../api/index';
import { mergeCar, sortCar, filter } from '../../utils';
const state={
    list3:{},//详情
    list:{},
    yearArr:[],
    year:'全部',
    inquiry:{},
    cityId:''
}
const mutations={
    updataList3(state,payload){
        state.list3=payload;
     
    },
    updataList(state,payload){
       
        var arr=[];
        payload.map((item,index)=>{
            if(arr.indexOf(item.market_attribute.year)==-1){
                arr.push(item.market_attribute.year)
            }
        })
        state.list=mergeCar(payload)
        state.yearArr= arr;
       
    },
    allData(state,payload){
          state.list=mergeCar(payload)
    },
    
    //点击年份显示相应数据
    updataYear(state,payload){
        state.year= payload;
        state.list=mergeCar(sortCar(filter(payload,state.list3.data.list)));
       
    },
    //获取的询价页面
    updataInquiry(state,payload){
      
        state.inquiry=payload
    },
    upDataCityIdData(state,payload){
        state.cityId=payload
    }
}

const actions={
    getList3({commit},payload){
        getDetailList(payload).then(res=>{
            commit('updataList3',res);
            commit('updataList',res.data.list);
        })
       
    },
    getYear({commit},payload){
        commit('updataYear',payload);
    },
    all({commit},payload){
        if(payload=='全部'){
            //显示所有数据
         commit('allData',state.list3.data.list);
        }
    },
    getInquiryData({commit},payload){
       
        getinquiry(payload.carId,payload.cityId).then(res=>{
            commit('updataInquiry',res.data);
        })

    },
    getCityIdData({commit}){
        getCityId().then(res=>{
           
            commit('upDataCityIdData',res.data.CityID);
        })
    }
    
}
export default{
    namespaced:true,//命名空间
    state,
    mutations,
    actions
}