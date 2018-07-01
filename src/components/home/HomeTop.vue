<template>
    <div>
      <mt-search
        v-model="value"
        placeholder='搜索'
        cancel-text="取消"
        >
      </mt-search>
    </div>
</template>

<script>
    export default {
        name: "HomeTop",
        data(){
          return {
            value:'123'
          }
        }
    }
</script>

<style scoped>

</style>
