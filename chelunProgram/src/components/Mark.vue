<template>
           <div :class="showlist?'carType show':'carType'" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" ref="carType">
            <div class="allcarType">
                <div class="carTypeList" v-for="(item,index) in list2.data" :key="index">
                    <p>{{item.GroupName}}</p>
                    <router-link v-for="(item2,index2) in item.GroupList" :key="index2" tag="dl" :to="{path:'/detail',query:{id:item2.SerialID}}">
                        <dt><img :src="item2.Picture" alt=""></dt>
                        <dd>
                            <p>{{item2.AliasName}}</p>
                            <p>{{item2.DealerPrice}}</p>
                        </dd>
                    </router-link>
                </div>
            </div>
        </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex';
import BScroll from 'better-scroll';

export default {
  name: 'app',
  computed:{
    ...mapState({
      list2:state=>state.index.list2,
      showlist:state=>state.index.isShowList
    })

  },
  methods:{
      //同步
    ...mapMutations({
      hideList:'index/hideList'
    }),
   touchstart(e){
                this.offsetX = 0;
                this.touch  = e.touches[0];
            },
            touchmove(e){
                let touch = e.touches[0];
                // this.touch.pageX是鼠标距离msak盒子的距离
                // touch.pageX是msak盒子距离当前屏幕左边的距离
                this.offsetX = touch.pageX - this.touch.pageX;
               
                if (this.offsetX > 0){
                    this.$refs.carType.style = `transform:translate3d(${this.offsetX}px, 0, 0)`;
                }
            },
            touchend(e){
                this.$refs.carType.style = ``;
                // console.log('offsetX...', this.offsetX);
                if (this.offsetX > 100){
                    this.hideList();
                }
            }
  },
  mounted(){
    new BScroll('.carType',{
        click:true
    })
  }
}

</script>


<style scoped>
.carType{
        width:80%;
        height: 100%;
       overflow: hidden;
       background:#fff;
       position: fixed;
       right:0;
       top: 0;
      transform: translate3d(100%,0,0);
      transition: transform .2s linear;
}
.carType.show{
     transform: translate3d(0,0,0);
     transition: transform .2s linear; 
     
}
.carTypeList>p{
    height: .4rem;
    line-height: .4rem;
    padding-left: .3rem;
    color: #aaa;
    background: #f4f4f4;
}
.carTypeList>dl{
    width: 100%;
    height: 1.5rem;
   
    display: flex;
    align-items: center;
    border-bottom: solid 1px #ccc;
}
.carTypeList dl dt{
    margin-left: .2rem;
}
.carTypeList dl dt img{
    width: 1rem;
    margin-top: .3rem
   
}
.carTypeList dl dd{
    line-height: 1.5;
    margin-left: .2rem;
}
</style>