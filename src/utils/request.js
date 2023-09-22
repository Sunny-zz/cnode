import axios from 'axios'
// import router from '../router'
const instance = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000
})

// 请求除了登录请求之外的请求 都必须设置请求头 请求头要带 token
// 用户每次登录成功都会重新生成一个新的 token 我们在登录的时候存储在 localStorage 中了
// 氢气逇时候 需要对所有请求设置请求拦截器 将所有请求的请求头添加 token 
// token 后端会置过期或者不过期
// 如果设置了过期时间，过期之后在发请求的话请求会失败 提示错误码 401 (token 过期)
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if(token) {
    config.headers.Authorization = token
  }
  return config
} )


instance.interceptors.response.use(res => {
  // 根据后端的错误码提示对应的信息
  // 比如 401 token 过期
  // if(res.code == 401){
  //  提示登录过期，重新登录
  // }
  return res.data
})

export const getAction = (url , data) => instance({
  method: 'GET',
  url,
  params: data,   // {pageNum: 2, pageSize: 10}
  // headers
})

export const postAction = (url , data) => instance({
  method: 'POST',
  url,
  data,
  // headers
})

export const deleteAction = (url , data) => instance({
  method: 'DELETE',
  url,
  data,
  // headers
})

export const patchAction = (url , data) => instance({
  method: 'PATCH',
  url,
  data,
  // headers
})

export default instance