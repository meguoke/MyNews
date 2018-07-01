<template>
   <mt-navbar v-model="selected">
     <mt-tab-item id="homePage">首页</mt-tab-item>
     <mt-tab-item id="video">视频</mt-tab-item>
     <mt-tab-item id="answer">答我赢钱</mt-tab-item>
     <mt-tab-item id="myInfo">我的</mt-tab-item>
   </mt-navbar>
</template>

<script>
    export default {
        name: "BottomMenu",
        data (){
          return {
            selected:'homePage'
          }
        }
    }
</script>
