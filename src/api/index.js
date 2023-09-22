import { getAction, postAction } from "@/utils/request";

// api 接口

// 登录
export const login = (accesstoken) => postAction('/accesstoken', {accesstoken})

// 文章列表
// 参数  page   limit    tab 
export const getTopics = (params)=> getAction('/topics', params)

// 详情
export const getTopicDetail = (id) => getAction('topic/'+ id)

// 用户信息详情
export const getUserInfo = loginname =>  getAction('user/'+ loginname)
