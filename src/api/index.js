import request from '@/utils/request'

export function getArticleList(pageNum) {
  return request({
    url: '/articles',
    method: 'get',
    params: {
      pageNum
    }
  })
}
