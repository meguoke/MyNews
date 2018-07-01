<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="tab-top">头条</mt-tab-item>
      <mt-tab-item id="tab-worldCup">世界杯</mt-tab-item>
      <mt-tab-item id="tab-video">视频</mt-tab-item>
      <mt-tab-item id="tab-newTime">新时代</mt-tab-item>
      <mt-tab-item id="tab-entertainment">娱乐</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="tab-top">
        <mt-cell v-for="n in 10" title="tab-top"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-worldCup">
        <mt-cell v-for="n in 5" title="tab-worldCup"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-video">
        <mt-cell v-for="n in 5" title="tab-video"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-newTime">
        <mt-cell v-for="n in 5" title="tab-newTime"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-entertainment">
        <mt-cell v-for="n in 7" title="tab-entertainment"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>

//import Vue from 'vue'

//import MintUI from 'mint-ui';
//Vue.use(MintUI)
export default {
  name: 'Navigate',
  data () {
    return {
      selected: 'tab-top'
    }
  }
}
</script>
