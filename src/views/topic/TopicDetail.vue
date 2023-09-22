<template>
  <div>
    <div v-if="topic">
    <LayoutContent>
      <div class="topic">
        <div class="topic-head">
          <h3>{{ topic.title }}</h3>
        </div>
        <div class="topic-content" v-html="topic.content"></div>
      </div>
    </LayoutContent>
    <LayoutContent >
      <template #head>
        <span>{{topic.replies.length}}</span>回复
      </template>
      <comment-item v-for="(item, index) in topic.replies" :key="item.id" v-bind="{...item, index}" />
    </LayoutContent>
  </div>
  <div v-if="noTopic">
    <p>文章已经被删除或者没有此文章</p>
  </div>
  </div>
</template>

<script>
import { getTopicDetail } from "../../api";
import CommentItem from '../../components-plus/CommentItem.vue'
export default {
  components: { CommentItem },
  data() {
    return {
      topic: null,
      noTopic: false
    };
  },
  async created() {
    const { id } = this.$route.params;
    try {
      const res = await getTopicDetail(id);
      this.topic = res.data;
    } catch (error) {
      this.noTopic = true
    }
  },
};
</script>

<style lang="less" scoped>
.topic {
  padding: 20px;
  .topic-content {
    /deep/h2 {
      margin: 10px 0;
    }
    /deep/img {
      width: 100%;
    }
  }
}
</style>