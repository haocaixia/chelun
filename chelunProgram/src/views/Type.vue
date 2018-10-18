<template>
    <div class="detail">
        <p>全部车款</p>
        <div class="car">
            <div class="type">
                <span @click="tab('全部')" :class="year=='全部'?'active':''">全部</span>
                <span v-for="(item,index) in yearArr" :key="index" @click="tab(item)" :class="year==item?'active':''">{{item}}</span>
            </div>
            <div class="type-item" v-if="index==0">
                <div v-for="(item,index) in list" :key="index">
                    <p>{{index}}</p>
                    <ul v-for="(value,key) in item" :key="key">
                        <li @click="tabType(value.car_id)">
                            <p>{{value.car_name}}</p>
                            <p>{{value.horse_power}}马力{{value.gear_num}}档双离合</p>
                            <p>
                                <span>指导价
                                            {{value.market_attribute.official_refer_price}}</span>
                                <span>
                                            {{value.market_attribute.dealer_price_min}}万起</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
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
                getCityIdData: 'detail/getCityIdData'
            }),
            tab(year) {
                //传年份
                this.getYear(year)
                this.all(year)
            },
            tabType(carId) {
                if (this.$route.query.ColorID) {
                    this
                        .$router
                        .push({
                            path: '/img',
                            query: {
                                SerialID: this.$route.query.SerialID,
                                CarID: carId,
                                ColorID: this.$route.query.ColorID
                            }
                        })
                } else {
                    this
                        .$router
                        .push({
                            path: '/img',
                            query: {
                                SerialID: this.$route.query.SerialID,
                                CarID: carId
                            }
                        })
                }
            }
        },
        mounted() {
            var id = 0;
            id = this.$route.query.SerialID;
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
    .detail>p {
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        color: #00afff;
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
        padding: 0.1rem 0.36rem;
        align-items: center;
        margin-bottom: 0.1rem;
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
        padding: 0.1rem 0.4rem;
        border-radius: 0.1rem;
        font-size: 0.32rem;
    }
    .type {
        height: 0.77rem;
        line-height: 0.77rem;
        padding: 0 0.36rem;
        background: #fff;
    }
    .type-item>div>p {
        height: 0.5rem;
        line-height: 0.5rem;
        color: #999;
        padding: 0 0.36rem;
    }
    .type-item>div>ul {
        padding: 0 0.36rem;
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
        height: 0.8rem;
        line-height: 0.8rem;
        border: none;
        color: #00afff;
        background: #fff;
        border-top: solid 1px #f4f4f4;
    }
    .type span {
        margin-left: 0.1rem;
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