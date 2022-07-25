<template>
  <div>
    <header
      class="masthead"
      style="background-image: url('http://img.mashiro.org.cn/background.png')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ articleDetail.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <v-md-preview :text="articleDetail.content" height="400px" />
        </div>
      </div>
    </article>
    <div class="comments-container">
      <Giscus
        id="comments"
        repo="mashiro707/blog-comments"
        repo-id="R_kgDOHssq6A"
        category="Announcements"
        category-id="DIC_kwDOHssq6M4CQXcD"
        mapping="url"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        theme="light_tritanopia"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import Giscus from '@giscus/vue'
</script>

<script>
import { getArticleDetail } from '@/api/article'
export default {
  data() {
    return {
      articleDetail: {}
    }
  },
  created() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      getArticleDetail(this.$route.query.id).then((res) => {
        this.articleDetail = res.data
      })
    }
  }
}
</script>

<style>
#comments::part(iframe) {
  max-width: 640px;
  margin: auto;
  display: flex;
}
.comments-container {
  max-height: 640px;
  overflow-y: scroll;
}
</style>
