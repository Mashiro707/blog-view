import request from '@/utils/request'

export function getArticleDetail(id) {
  return request({
    url: '/article',
    method: 'post',
    params: {
      id
    }
  })
}
