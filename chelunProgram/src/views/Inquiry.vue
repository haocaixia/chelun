<template>
    <div class="inquiry">
        <div class="inquiry-main">
        <P>可向多个商家咨询最低价，商家及时回复</P>
        <div class="main">
            <dl class="info">
                <dt>
                   <img :src="inquiry.details.serial.Picture">
                </dt>
                <dd>
                    <p>{{inquiry.details.serial.AliasName}}</p>
                    <P>{{inquiry.details.market_attribute.year}}款</P>
                </dd>
            </dl>
            <div class="person">
                <p>个人信息</p>
                <ul>
                    <li>
                        <span>姓名</span>
                        <input type="text" placeholder="请输入您的真实姓名">
                    </li>
                    <li>
                        <span>手机</span>
                        <input type="text" placeholder="请输入您的真实手机号">
                    </li>
                     <li>
                        <span>城市</span>
                        <span class="city" @click="city">{{cityname}}</span>
                    </li>
                </ul>
                <div class="but">
                    <button @click="alert">询最低价</button>
                </div>
            </div>
            <div class="shoper">
                  <p>选择报价经销商</p>
                  <ul>
                      <li v-for="(item,index) in inquiry.list" :key="index">
                          <input type="checkbox">
                          <div>
                                <p>
                                    <span>{{item.dealerShortName}}</span>
                                    <span>{{item.promotePrice}}万</span>
                                </p>
                                <p>
                                    <span>{{item.address}}</span>
                                    <span>售{{item.saleRange}}</span>
                                </p>
                          </div>
                        
                      </li>
                  </ul>
            </div>
        </div>
        
        <footer>
            <button>询最低价</button>
        </footer>
       
        </div>
         <city :showCityList="isShowCity" @changeshowList="changeshowList"></city>
    </div>
  
</template>

<script>
 import {mapState,mapActions,mapMutations} from 'vuex';
 import City from '../components/City'
export default {
    data(){
        return {
            isShowCity:false,
            cityname:'北京',
            CityIds:201
        }
    },
  computed:{
    ...mapState({
      inquiry:state=>state.detail.inquiry
    })
  },
  methods:{
      //同步
    ...mapActions({
      getInquiryData:'detail/getInquiryData'
    }),
    city(){
        this.isShowCity=true;
       
    },
    //接受子集传过来的参数
    changeshowList:function(aa,CityName,CityID){
        this.cityname=CityName;
        this.CityIds=CityID;
        this.isShowCity=aa;
        //子集点击相应的城市  渲染相应城市数据
        var carId=this.$route.query.carId;
        var cityId=this.CityIds;
        this.getInquiryData({carId:carId,cityId:cityId})
    },
    alert(){
        alert('请填入相应个人信息')
    }
  },
  components:{
      City
  },

  mounted(){
    var carId=this.$route.query.carId;
     var cityId=this.$route.query.cityId;
     this.getInquiryData({carId:carId,cityId:cityId})
  }
}
</script>


<style scoped>
.inquiry{
     width: 100%;
    height: 100%;
   overflow: hidden;
   position: relative;
}
.inquiry-main{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column
}
.inquiry-main>p{
    height: .3rem;
    line-height: .3rem;
    background: #79cd92;
    color: #fff;
    text-align: center;
}
.main{
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: auto;
}
.info{
    width: 100%;
    display: flex;
    align-items: center;
}
.info dt {
    flex: 3;
    width: 100%;
    padding: .1rem;
    box-sizing: border-box;
    
}
.info dd {
    flex: 7;
    width: 100%;
    line-height: 1.5;
    
}
.info  dt img{
    width: 3rem;
}
.person>p{
    height: .5rem;
    line-height: .5rem;
    background: #eee;
    color: #666;
}
.person>p{
    height: .5rem;
    line-height: .5rem;
    background: #eee;
    color: #666;
}
.person ul li{
    height: .88rem;
    line-height: .88rem;
    display:flex;
    border-bottom: solid 1px #eee;
     padding: 0 .2rem;
     justify-content: space-between
}
.person ul li input{
    border: none;
    font-size: .32rem;
    padding-right: .2rem;
    width: 88%;
    text-align: right;
    box-sizing: border-box;
    color: #555;
}
.person ul li span{
    padding-right: .2rem;
}
.city{
    color: #555;
    
}
/* //右侧小三角 */
.city:after
{
    content: "";
    display: inline-block;
    padding-top: .16rem;
    padding-right: .16rem;
    border-top: 1px solid silver;
    border-right: 1px solid silver;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
.but{
    padding:  .3rem 0;
}
.but button{
    width: 80%;
    height: .7rem;
    background: #3aacff;
    border-radius: .1rem;
    color: #fff;
    text-align: center;
    margin-left: 10%;
    border: none;
}
.shoper{
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
}
.shoper>p{
     height: .5rem;
    line-height: .5rem;
    background: #eee;
    color: #666;
}
.shoper ul{
    width: 100%;
}
.shoper ul li{
    width: 100%;
     height: 1.65rem;
    vertical-align: middle;
    border-bottom: solid 1px #eee;
     padding: .26rem .2rem .26rem .2rem;
     line-height: 2;
     display: flex;
     align-items: center;
     box-sizing: border-box;
}
.shoper ul li>input{
    margin-right: .2rem;
}
.shoper ul li>div{
    flex: 1;
    width: 100%;
    overflow: hidden;
}
.shoper ul li p{
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: .3rem;
}
.shoper ul li p span :nth-child(1){
    flex: 8;
    width: 100%;
    overflow: hidden;
}
.shoper ul li p:nth-child(2){
    width: 100%;
    font-size: .24rem;
    color: #a2a2a2;
}
.shoper ul li p:nth-child(2) span:nth-child(1){
    flex: 8;
    height: 25.6px;
   width: 100%;
    white-space: nowrap; /*强制文本在一行内显示，不换行*/
overflow: hidden; /*超出部分隐藏*/
text-overflow: ellipsis
}
.shoper ul li p:nth-child(1) span:nth-child(1){
    flex: 8;
}
.shoper ul li p:nth-child(1) span:nth-child(2){
    color: #f00;
}
footer{
    width: 100%;
}
footer button{
      width: 100%;
    height: .7rem;
    background: #3aacff;
    color: #fff;
    text-align: center;
    
    border: none;
}
</style>