<template>
    <div class="wrap">
        <div class="list" ref="list">
            <div class="scroll">
                <div v-for="(item,index) in list1" :key="index" class="slider">
                    <p :ref="'a'+index">{{item.title}}</p>
                    <dl v-for="(item2,index2) in item.list" :key="index2" @click="getList2(item2.MasterID)">
                        <dt><img v-lazy="item2.CoverPhoto"></dt>
                        <dd>{{item2.Name}}</dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="bar">
            <ul>
                <li v-for="(item,index) in list1" :key="index" class="slider" @touchstart="touchstart(index,$event)" @touchmove='touchmove($event)' @touchend='touchend()' ref="li">{{item.title}}</li>
            </ul>
        </div>
        <Login :isHide="isHideLoading"></Login>
        <Tit v-if="isShow">{{tit}}</Tit>
        <Mark></Mark>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions,
        mapMutations
    } from 'vuex';
    import BScroll from 'better-scroll';
    import Login from '../components/Login'
    import Mark from '../components/Mark'
    import Tit from '../components/Tit'
    export default {
        name: 'app',
        data() {
            return {
                //预加载的loging
                isHideLoading: false,
                isShow: false,
                //滚动到哪里
                scroll: '',
                id: 0,
                //滚动开始位置
                start: 0,
                //设置ABcd的字母弹框
                tit: 'A'
            }
        },
        computed: {
            ...mapState({
                list1: state => state.index.list1
            })
        },
        methods: {
            //同步
            ...mapActions({
                getList1: 'index/getList1',
                getList2: 'index/getList2'
            }),
            touchstart(id, e) {
                this.id = id
                this.start = e.changedTouches[0].clientY
                this.scroll.scrollToElement(this.$refs['a' + id][0])
            },
            touchmove(e) {
                //计算百度统计
                _hmt.push(['_trackEvent', '汽车报价', 'tab', '字母拖动'])
                let newID = this.id + parseInt((e.changedTouches[0].clientY - this.start) / e.target.clientHeight)
                if (newID < 0) {
                    newID = 0
                }
                if (newID > 20) {
                    newID = 20
                }
                //滚动字幕  弹出 遮罩层显示字幕
                this.scroll.scrollToElement(this.$refs['a' + newID][0]);
                this.isShow = true
                this.tit = this.$refs['li'][newID].innerHTML;
            },
            touchend() {
                this.isShow = false
            }
        },
        mounted() {
            this.getList1();
            this.scroll = new BScroll(this.$refs.list, {
                click: true
            })
        },
        updated() {
            //做loging
            this.isHideLoading = true
        },
        components: {
            Login,
            Mark,
            Tit
        }
    }
</script>

<style scoped>
    .wrap,
    .list {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    .slider p {
        height: .4rem;
        line-height: .4rem;
        padding-left: .3rem;
        color: #aaa;
        background: #f4f4f4;
    }
    .slider dl {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        display: flex;
        align-items: center;
        border-bottom: solid 1px #ccc;
    }
    .slider dl dt {
        margin-left: .2rem;
    }
    .slider dl dt img {
        width: .8rem;
        margin-top: .5rem
    }
    .slider dl dd {
        line-height: 45.86px;
        margin-left: .2rem;
    }
    .bar {
        width: .5rem;
        text-align: center;
        position: fixed;
        right: 0;
        top: 50%;
        margin-top: -4rem;
        color: #666;
    }
</style>