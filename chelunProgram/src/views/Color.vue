<template>
    <div class="wrap">
        <p>全部颜色</p>
        <div class="year">
            <p><span v-for="(item,index) in colorList" :key="index" @click="tabYear(index)" :class="year==index?'active':''">{{index}}</span></p>
            <ul>
                <li v-for="(value,key) in colorList[year]" :key="key" @click="tabColor(value.ColorId,value.Name)">
                    <span :style="`background:${value.Value}`"></span>
                    {{value.Name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
    export default {
        data(){
            return{
                year:''
            }
        },
        computed:{
            ...mapState({
                colorList:state=>state.color.colorList,
                colorName:state=>state.color.colorName
            })
        },
        methods:{
            ...mapActions({
                getColorData:'color/getColorData',
                getColorName:'color/getColorName'
            }),
            tabYear(year){
                this.year=year
               
            },
            tabColor(ColorId,colorname){
                this.getColorName(colorname)
               
                     this.$router.push({
                        path:'/img',
                        query:{
                            SerialID:this.$route.query.SerialID,
                            ColorID:ColorId
                        }
                    })
                
            }
        },
        mounted(){
            
            this.getColorData(this.$route.query.SerialID)
        }
    }
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 100%;
}
.wrap>p{
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    color: #00afff;
}
.year p{
    width: 100%;
    display: flex;
   
}
.year ul{
    margin-top: .15rem;
    padding: 0 .2rem;
    overflow: hidden;
    background: #fff;
}
.year ul li{
    float: left;
    width: 3.45rem;
    font-size: .32rem;
    line-height: .68rem;
    border: 1px solid #3aacff;
    box-sizing: border-box;
    margin: .2rem 0;
    border-radius: .05rem;
    text-align: center;
   
   
}
.year ul li span{
        display: inline-block;
    width: .4rem;
    height: .4rem;
    margin-left: .2rem;
    vertical-align: -12%;
    background: #fe9210;
    box-sizing: border-box;
    border: 1px solid #818181;
}
.year span{
    flex: 1;
    text-align: center;
}
.active{
    color:#00afff;
}
</style>