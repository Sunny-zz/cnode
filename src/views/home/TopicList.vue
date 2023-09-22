<template>
  <div
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
  >
    <LayoutContent>
      <template #head>
        <div class="tabs">
          <router-link
            :class="[
              'tab-item',
              {
                'router-link-active':
                  item.value === 'all' && $route.path === '/',
              },
            ]"
            v-for="item in tabs"
            :key="item.id"
            :to="{
              path: '/' + item.value,
            }"
          >
            {{ item.label }}
          </router-link>
        </div>
      </template>
      <div>
        <div class="list">
          <!-- <el-skeleton v-if="loading" :rows="20" animated /> -->
          <template v-if="list.length > 0">
            <TopicItem v-bind="item" v-for="item in list" :key="item.id" />
          </template>
          <el-empty v-else-if="list.length===0&&!loading" description="暂无文章数据"></el-empty>
        </div>

        <el-pagination
          v-if="list.length > 0"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="page"
          :page-sizes="[20, 40, 60]"
          :page-size.sync="limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </LayoutContent>
  </div>
</template>

<script>
import { getTopics } from "../../api";
export default {
  data() {
    return {
      // 列表数据
      list: [],
      //
      tabs: [
        {
          id: "16t",
          label: "全部",
          value: "all",
          total: 139,
        },
        {
          id: "161t",
          label: "精华",
          value: "good",
          total: 139,
        },
        {
          id: "162t",
          label: "分享",
          value: "share",
          total: 139,
        },
        {
          id: "16t3",
          label: "问答",
          value: "ask",
          total: 139,
        },
        {
          id: "16t4",
          label: "招聘",
          value: "job",
          total: 139,
        },
        {
          id: "165t",
          label: "客户端测试",
          value: "dev",
          total: 139,
        },
      ],
      // 分页参数
      page: 1,
      limit: 40,
      tab: "all",
      loading: false,
    };
  },
  computed: {
    total() {
      return this.tabs.find((item) => item.value === this.tab).total;
    },
  },
  watch: {
    "$route.params.type": {
      handler(val) {
        const type = val || "all";
        this.tab = type;
        this.page = 1;
        this.limit = 40;
        this.getTopics();
      },
      immediate: true,
    },
  },
  methods: {
    async getTopics() {
      this.loading = true;
      const { page, limit, tab } = this;
      const params = {
        tab,
        page,
        limit,
      };
      const { data } = await getTopics(params);
      console.log(data);
      this.loading = false;
      this.list = data;
    },
    handleCurrentChange() {
      // console.log(this.page)
      this.getTopics();
    },
    handleSizeChange() {
      // console.log(this.limit)
      this.page = 1;
      this.getTopics();
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  min-height: 300px;
}
.tabs {
    display: flex;
    .tab-item {
      padding: 3px 10px;
      color: #444;
      border-radius: 5px;
      &.router-link-active {
        background-color: #80bd01;
        color: #fff;
      }
    }
  }
</style>