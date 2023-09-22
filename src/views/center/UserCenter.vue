<template>
  <div v-if="info">
    <LayoutContent>
      <template #head>
        <span>最近参与的话题</span>
      </template>
      <div v-if="info.recent_replies.length">
        <TopicItem
          v-for="item in info.recent_replies"
          :key="item.id"
          v-bind="item"
        />
      </div>
    </LayoutContent>
  </div>
</template>

<script>
import { getUserInfo } from '../../api'
export default {
  data() {
    return {
      info: null,
    }
  },
  watch: {
    '$route.params.loginname': {
      async handler(val) {
        const res = await getUserInfo(val)
        // console.log(res)
        this.info = res.data
      },
      immediate: true
    },
  },
}
</script>

<style></style>
