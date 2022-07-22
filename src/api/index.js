import request from '@/utils/request'

export function getArticleList(requestInfo) {
  return request({
    url: '/',
    method: 'post',
    data: {
      ...requestInfo
    }
  })
}
