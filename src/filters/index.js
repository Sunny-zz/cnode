// 全局过滤器
import Vue from "vue";
import moment from 'moment'
// 距离当前日期多久
Vue.filter('fromNow', (time) => {
  return moment(time).fromNow(); 
})

// 主体类型英文转中文
const tabsMapObj = {
  share: '分享',
  ask: '问答',
  job: '招聘',
  dev: '客户端测试'
}

// typeObj = {tab, good, top}
Vue.filter('transformTopicType', ({tab, good, top}) => top ? '置顶' : good ? '精华' : tabsMapObj[tab])