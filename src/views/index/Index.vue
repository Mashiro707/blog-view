<template>
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <div v-for="article in articleList" :key="article.id">
          <!-- Post preview-->
          <div class="post-preview">
            <router-link :to="{ path: '/article', query: { id: article.id }}">
              <h2 class="post-title">{{ article.title }}</h2>
              <v-md-preview class="post-subtitle" :text="article.description" />
            </router-link>
            <p class="post-meta">
              Posted by
              <a href="">Mashiro</a>
              on {{ $filters.dateFormat(article.create_time) }}
            </p>
          </div>
          <!-- Divider-->
          <hr class="my-4">
        </div>
        <!-- Pager-->
        <div
          v-if="requestInfo.page_num > 1"
          class="d-flex justify-content-end mb-4"
          style="float: left"
        >
          <a
            class="btn btn-lg btn-outline-dark text-uppercase"
            @click="handleCurrentChange(-1)"
          >Newer Posts</a>
        </div>
        <div class="d-flex justify-content-end mb-4">
          <a
            class="btn btn-lg btn-outline-dark text-uppercase"
            @click="handleCurrentChange(1)"
          >Older Posts</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/style/styles.css'
import { getArticleList } from '@/api/index'
export default {
  name: 'Index',
  data() {
    return {
      requestInfo: {
        page_num: 1,
        page_size: 5
      },
      total: 0,
      articleList: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getArticleList(this.requestInfo).then((res) => {
        if (res.code === 200) {
          this.articleList = res.data.list
          this.total = res.data.total
        }
      })
    },
    // 监听页码改变事件
    handleCurrentChange(val) {
      this.requestInfo.page_num = this.requestInfo.page_num + val
      this.getData()
    }
  }
}
</script>
