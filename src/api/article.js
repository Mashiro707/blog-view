import request from '@/utils/request'

export function getArticleDetail(articleID) {
  return request({
    url: '/article',
    method: 'get',
    params: {
      articleID
    }
  })
}
