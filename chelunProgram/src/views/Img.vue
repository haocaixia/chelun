<template>
  <div class="wrap">
    <div class="wrapp">
      <div class="nav">
        <span @click="tabColor" v-if="!colorName">颜色</span>
        <span @click="tabColor" v-if="colorName">{{colorName}}</span>
        <span @click="tabType">车款</span>
      </div>
      <div v-for="(item,index) in imgList" :key="index" v-if="imgList">
        <img :src="`${value.Url.replace('{0}',value.LowSize)}`" alt="" v-for="(value,key) in item.List" :key="key" @click="tabSwiper(item.Id,key,$event)" :data-id="key">
        <div style="{top:0}" @click="tabImg(item.Id)">
          <p>{{item.Name}}</p>
          <p>{{item.Count}}</p>
        </div>
      </div>
      <div v-if="imgList==false" class="none">
        <img src="../assets/none/timg.jpg" alt="">
        <p>暂无数据</p>
      </div>
    </div>
    <!-- //图片轮播 -->
    <div class="image-list" @scroll11="scroll" ref="wrap">
      <section ref="section">
        <!-- //用data-id是为了做slideTo -->
        <img :src="`${item.Url.replace('{0}', item.LowSize)}`" alt="" v-for="(item,index) in imgList2" :key="index" @click="tabSwiper(index,index,$event,true)" :data-id="index">
      </section>
    </div>
    <!-- //图片详情 -->
    <div class="img-detail" v-show="isShow" @click="showSwiper">
      <swiper ref="mySwiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgList2" :key="index">
          <img :src="`${item.Url && item.Url.replace('{0}',item.HighSize)}`">
        </swiper-slide>
        <!-- Optional controls -->
      </swiper>
      <p>{{current}}/{{imgList2.length}}</p>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions,
    mapMutations
  } from "vuex";
  //引入去抖动
  import {
    lazyLoad
  } from "../utils/lazyLoad";
  import {
    debounce
  } from "../utils/utils";
  import "swiper/dist/css/swiper.css";
  import {
    swiper,
    swiperSlide
  } from "vue-awesome-swiper";
  export default {
    data() {
      return {
        isShow: false
      };
    },
    computed: {
      ...mapState({
        imgList: state => state.img.imgList,
        imgList2: state => state.img.imgList2,
        isFetching: state => state.img.isFetching,
        current: state => state.img.current,
        Page: state => state.img.Page,
        colorName: state => state.color.colorName
      }),
      swiperOption() {
        var that = this;
        return {
          on: {
            slideChange: function() {
              that.getCurrentData(this.activeIndex + 1);
            }
          }
        };
      },
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {
      ...mapActions({
        getImgList: "img/getCategoryImgList1",
        getImgList2: "img/getCategoryImgList2",
        getCurrentData: "img/getCurrentData"
      }),
      // 监听列表滚动
      scroll() {
        let scrollTop = this.$refs.wrap.scrollTop;
        let height = this.$refs.section.getBoundingClientRect().height;
        if (scrollTop > height - window.innerHeight - 20 && !this.isFetching) {
          // 执行加载下一页的逻辑
          this.getImgList2({
            SerialID: this.$route.query.SerialID,
            ImageID: this.$route.query.ImageID,
            CarID: this.$route.query.CarID,
            ColorID: this.$route.query.ColorID
          });
        }
      },
      updated() {
        if (this.Page == 2 && this.imgList.length) {
          lazyLoad(".wrap");
        }
      },
      tabColor() {
        if (this.$route.query.CarID) {
          this.$router.push({
            path: "/color",
            query: {
              SerialID: this.$route.query.SerialID,
              CarID: this.$route.query.CarID
            }
          })
        } else {
          this.$router.push({
            path: "/color",
            query: {
              SerialID: this.$route.query.SerialID
            }
          });
        }
      },
      tabType() {
        if (this.$route.query.ColorID) {
          this.$router.push({
            path: "/type",
            query: {
              SerialID: this.$route.query.SerialID,
              ColorID: this.$route.query.ColorID
            }
          });
        } else {
          this.$router.push({
            path: "/type",
            query: {
              SerialID: this.$route.query.SerialID
            }
          });
        }
      },
      tabImg(ImageID) {
        this.$router.push({
            path: "/img",
            query: {
              SerialID: this.$route.query.SerialID,
              ImageID: ImageID
            }
          }),
          this.getImgList2({
            SerialID: this.$route.query.SerialID,
            ImageID: this.$route.query.ImageID,
            CarID: this.$route.query.CarID,
            ColorID: this.$route.query.ColorID
          });
        this.$refs.wrap.style.position = "fixed";
        this.$refs.wrap.style.top = 0;
        this.$refs.wrap.style.left = 0;
      },
      tabSwiper(id, index, e, flag) {
        if (index) {
          this.getCurrentData(index);
        } else {
          this.getCurrentData(e.target.dataset.id);
        }
        if (!flag) {
          this.getImgList2({
            SerialID: this.$route.query.SerialID,
            ImageID: id,
            CarID: this.$route.query.CarID,
            ColorID: this.$route.query.ColorID
          });
        }
        this.swiper.slideTo(e.target.dataset.id, 100, false);
        this.isShow = true;
      },
      showSwiper() {
        this.isShow = false
      }
    },
    mounted() {
      this.getImgList({
        SerialID: this.$route.query.SerialID,
        ImageID: this.$route.query.ImageID,
        CarID: this.$route.query.CarID,
        ColorID: this.$route.query.ColorID
      });
      let func = debounce(this.scroll, 100);
      this.$refs.wrap.addEventListener("scroll", func);
    }
  };
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .wrapp {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      position: relative;
      >div {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        >div {
          position: absolute;
          width: 2.44rem;
          height: 2.45rem;
          text-align: center;
          background: rgba(56, 90, 130, 0.5);
          p {
            color: #fff;
            text-align: center;
            line-height: 3;
          }
        }
        >img {
          margin-right: 0.06rem;
          margin-bottom: 0.06rem;
          width: 2.44rem;
          height: 2.45rem;
        }
      }
    }
    .nav {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  .image-list {
    background: #f4f4f4;
    text-align: center;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    height: 100%;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    span,
    img {
      width: 2.46rem;
      height: 1.64rem; // height: 2.46rem;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  .img-detail {
    background: #000;
    top: 0;
    text-align: center;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 101;
    color: #fff;
    img {
      width: 100%;
      height: auto;
      margin: 50% 0;
    }
    >p {
      width: 100%;
      position: absolute;
      bottom: 0.5rem;
      left: 0;
      color: #fff;
      text-align: center;
    }
  }
  .none {
    width: 100%;
    height: 70%;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      left: 50%;
      top: 20%;
      margin-left: -52px;
    }
    p {
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
    }
  }
</style>
