<template>
    <div :class="showCityList?'ALLcity active':'ALLcity'">
        
        <div class="location">
             <p>自动定位</p>
             <p>北京</p>
        </div>
       <div class="list">
            <p>省市</p>
            <ul>
                
                <li v-for="(item,index) in cityList" :key="index" @click="clickCity(item.CityName,item.CityID)">{{item.CityName}}</li>
            </ul>
       </div>
       
    </div>
</template>


<script>
 import {mapState,mapActions,mapMutations} from 'vuex';
export default {
  props:['showCityList'],
  computed:{
    ...mapState({
      cityList:state=>state.city.cityList
    })
  },
  methods:{
      //同步
    ...mapActions({
      getCityList:'city/getCityList'
   
    }),
    clickCity(CityName,CityID){
        //发送给子集消息
       this.$emit('changeshowList',false,CityName,CityID)
       
    }
  },
  mounted(){
     this.getCityList()
  }
}
</script>

<style scoped>
.ALLcity{
    width: 100%;
    height: 100%;
    background: #fff;
   overflow-y: auto;
   transform: translate3d(0,0,0);
   transition: 1s;
  
}
.active{
     transform: translate3d(0,-100%,0);
       transition: 1s;
}
.active{
   
    transition: all 1s;
}
.location p:nth-child(1){
    height: .4rem;
    line-height: .4rem;
    font-size: .24rem;
    padding-left: .2rem;
    background: #f4f4f4;
}
.location p:nth-child(2){
        padding-left: .4rem;
    font-size: .28rem;
    height: .8rem;
    line-height: .8rem;
    background: #fff;
}
.list p:nth-child(1){
    height: .4rem;
    line-height: .4rem;
    font-size: .24rem;
    padding-left: .2rem;
    background: #f4f4f4;
}
.list ul li{
         padding-left: .3rem;
    font-size: .28rem;
    height: .8rem;
    line-height: .8rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    margin-left: .1rem;
    position: relative;
}
.list ul li::after{
        content: "";
    display: inline-block;
    padding-top: .16rem;
    padding-right: .16rem;
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    right: .35rem;
    top: .3rem;
}
</style>