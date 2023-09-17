import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000
})

instance.interceptors.response.use(res => {
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