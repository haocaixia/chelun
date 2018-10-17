<template>
    <div class="login" :hidden="isHide">
        <img src="../assets/login/timg (2).gif" alt="">
    </div>
</template>

<script>
    export default {
        props:['isHide'],
       mounted(){
           
       }
        
    }
</script>

<style scoped>
.login{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    background:#fff;
    z-index:99;

}
.login img{
    width:2rem;
    border-radius: .2rem;
    position: absolute;
    top:50%;
    left: 50%;
    margin-left: -1rem;
    margin-top: -.425rem;
}
</style>