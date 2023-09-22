<template>
  <div>
    404
    <el-button @click="goHome" type="text">返回首页</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>