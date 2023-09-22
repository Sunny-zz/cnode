<template>
  <div class="topic-item" >
    <router-link :to="{
      name: 'user',
      params: {loginname: author.loginname}
    }">
      <img width="40px" height="40px" :src="author.avatar_url" alt="">
    </router-link>
    <div v-if="visit_count!= undefined" class="nums">
      <span>{{reply_count}}</span>
      /
      <span>{{visit_count}}</span>
    </div>
    <el-tag v-if="top !== undefined" size="small" :type="top || good ? 'success' : 'info'" :effect="top || good ? 'dark' : 'light'"  >{{ {top, good, tab} |transformTopicType}}</el-tag>
    <span @click="goToDetail" class="title">{{title}}</span>
    <span>{{last_reply_at | fromNow}}</span>
  </div>
</template>

<script>

export default {
  name: 'TopicItem',
  props: ['author','good', 'last_reply_at', 'reply_count','tab','title', 'top', 'visit_count', 'id'],
  methods: {
    goToDetail() {
      // 去详情页面
      this.$router.push({
        name: 'topic',
        params: {
          id: this.id
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>
  .topic-item {
    display: flex;
    padding: 15px 10px;
    border-bottom: 1px solid #ccc;
    align-items: center;
    >img{
      cursor: pointer;
    }
    .title {
      margin-left: 6px;
      flex-grow: 1;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
    .nums {
      width: 110px;
      text-align: center;
    }
  }
  
</style>