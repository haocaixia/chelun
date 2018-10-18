<template>
  <div class="detail">
    <div class="car">
      <div class="img">
        <img :src="list3.data && list3.data.CoverPhoto" alt="" @click="tabImg(list3.data.SerialID)">
      </div>
      <div class="info">
        <div>
          <p>{{list3.data.market_attribute.dealer_price}}</p>
          <p>指导价{{list3.data.market_attribute.official_refer_price}}</p>
        </div>
        <router-link tag="button" :to="{path:'/inquiry',query:{carId:list3.data.list[0].car_id,year:list3.data.list[0].market_attribute.year,cityId:cityId}}">询问底价</router-link>
      </div>
      <div class="type">
        <span @click="tab('全部')" :class="year=='全部'?'active':''">全部</span>
        <span v-for="(item,index) in yearArr" :key="index" @click="tab(item)" :class="year==item?'active':''">{{item}}</span>
      </div>
      <div class="type-item" v-if="index==0">
        <div v-for="(item,index) in list" :key="index">
          <p>{{index}}</p>
          <ul v-for="(value,key) in item" :key="key">
            <li>
              <p>{{value.car_name}}</p>
              <p>{{value.horse_power}}马力{{value.gear_num}}档双离合</p>
              <p><span>指导价 {{value.market_attribute.official_refer_price}}</span><span> {{value.market_attribute.dealer_price_min}}万起</span></p>
            </li>
            <router-link tag="button" :to="{path:'/inquiry',query:{carId:value.car_id,cityId:cityId}}">询问底价</router-link>
          </ul>
        </div>
      </div>
    </div>
    <router-link class="fotter" tag="div" :to="{path:'/inquiry',query:{carId:list3.data.list[0].car_id,cityId:cityId}}">
      <p>询问底价</p>
      <p>本地经销商为你报价</p>
    </router-link>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex';
  export default {
    data() {
      return {
        index: 0
      }
    },
    computed: {
      ...mapState({
        list3: state => state.detail.list3,
        list: state => state.detail.list,
        yearArr: state => state.detail.yearArr,
        year: state => state.detail.year,
        cityId: state => state.detail.cityId
      })
    },
    methods: {
      //同步
      ...mapActions({
        getList3: 'detail/getList3',
        getYear: 'detail/getYear',
        all: 'detail/all',
        getCityIdData: 'detail/getCityIdData',
      }),
      tab(year) {
        //传年份
        this.getYear(year)
        this.all(year)
      },
      //点击跳转图片
      tabImg(SerialID) {
        this.$router.push({
          path: '/img',
          query: {
            "SerialID": SerialID
          }
        })
      }
    },
    mounted() {
      var id = 0;
      id = this.$route.query.id;
      this.getList3(id);
      this.getCityIdData()
    }
  }
</script>

<style scoped>
  .detail {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #f4f4f4;
    display: flex;
    flex-direction: column;
  }
  .car {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  .img {
    width: 100%;
    height: 3.29rem;
    position: relative;
    overflow: hidden;
  }
  .img img {
    width: 100%;
    position: absolute;
    top: -25%;
  }
  .info {
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: .1rem .36rem;
    align-items: center;
    margin-bottom: .1rem;
  }
  .info>div p {
    line-height: 2;
  }
  .info>div p:nth-child(1) {
    color: #f00;
  }
  .info button {
    background: #00afff;
    color: #fff;
    border: none;
    padding: .1rem .4rem;
    border-radius: .1rem;
    font-size: .32rem;
  }
  .type {
    height: .77rem;
    line-height: .77rem;
    padding: 0 .36rem;
    background: #fff;
  }
  .type-item>div>p {
    height: .5rem;
    line-height: .5rem;
    color: #999;
    padding: 0 .36rem;
  }
  .type-item>div>ul {
    padding: 0 .36rem;
    background: #fff;
  }
  .type-item>div>ul li p {
    line-height: 2;
  }
  .type-item>div>ul li p:nth-child(2) {
    color: #bdbdbd;
  }
  .type-item>div>ul li p:nth-child(3) {
    text-align: right;
  }
  .type-item>div>ul li p:nth-child(3) span:nth-child(2) {
    color: #f00;
  }
  .type-item>div>ul button {
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    border: none;
    color: #00afff;
    background: #fff;
    border-top: solid 1px #f4f4f4;
  }
  .type span {
    margin-left: .1rem;
  }
  .fotter {
    width: 100%;
    height: 1rem;
    line-height: 1.5;
    text-align: center;
    background: #3aacff;
    color: #fff;
  }
  .active {
    color: #00afff;
  }
</style>