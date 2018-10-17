import Vue from 'vue';
import Router from 'vue-Router';
const Index=()=>import('../views/Index');
const Detail=()=>import('../views/Detail');
const Inquiry=()=>import('../views/Inquiry');
const Img=()=>import('../views/Img');
const Color=()=>import('../views/Color');
const Type=()=>import('../views/Type');
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/index',
            name:'Index',
            component:Index
        },
        {
            path:'/detail',
            name:'Detail',
            component:Detail  
        },
        {
            path:'/color',
            name:'Color',
            component:Color  
        },
        {
            path:'/type',
            name:'Type',
            component:Type  
        },
        {
            path:'/inquiry',
            name:'Inquiry',
            component:Inquiry  
        },
        {
            path:'/img',
            name:'Img',
            component:Img  
        },
        
        {
            path:'*',
            redirect:'/index' 
        }
    ]
})