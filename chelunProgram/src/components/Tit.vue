<template>
    <div class="tit">
       <div class="tit-item">
           <slot></slot>
       </div>
    </div>
</template>

<script>
    export default {
        props:['show'],
       mounted(){
           
       }
        
    }
</script>

<style scoped>
.tit{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
z-index: 99;
}
.tit-item{
    width: 2rem;
    height:2rem;
    background: rgb(0,0,0,0.5);
    color: #fff;
    text-align: center;
    line-height: 2rem;
   
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -1rem;
    margin-top: -1rem;
    border-radius: .5rem;
}
</style>