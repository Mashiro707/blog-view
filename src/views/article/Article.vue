<template>
  <article class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <v-md-preview :text="articleDetail.content" height="400px" />
      </div>
    </div>
  </article>
</template>

<script>
import { getArticleDetail } from '@/api/article'
export default {
  data() {
    return {
      articleDetail: {
        content: '# 1231231'
      }
    }
  },
  created() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      getArticleDetail(this.$route.params.articleID).then(res => {
        this.articleDetail = res.data
      })
    }
  }
}
</script>

<style>
</style>
