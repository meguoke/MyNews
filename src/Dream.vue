<template>
  <div id="dream">
    <router-view name="top"/>
    <router-view name="navigate"/>
    <router-view name="bottom"/>
  </div>
</template>

<script>
export default {
  name: 'Dream'
}
</script>

<style>
#dream {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
