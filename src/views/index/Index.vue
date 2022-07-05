<template>
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <div v-for="article in articleList" :key="article.id">
          <!-- Post preview-->
          <div class="post-preview">
            <router-link :to="'/article/' + article.id">
              <h2 class="post-title">{{ article.title }}</h2>
              <h3 class="post-subtitle">{{ article.description }}</h3>
            </router-link>
            <p class="post-meta">
              Posted by
              <a href="">Mashiro</a>
              on {{ article.create_time | dateFilter }}
            </p>
          </div>
          <!-- Divider-->
          <hr class="my-4">
        </div>
        <!-- Pager-->
        <div v-if="pageNum > 1" class="d-flex justify-content-end mb-4" style="float: left;"><a class="btn btn-lg btn-outline-dark text-uppercase" href="#!">Newer Posts</a></div>
        <div class="d-flex justify-content-end mb-4"><a class="btn btn-lg btn-outline-dark text-uppercase" href="#!">Older Posts</a></div>
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
      pageNum: 1,
      articleList: [
        {
          id: 1,
          title: 'title1',
          description: 'description1',
          create_time: 1657002550
        },
        {
          id: 2,
          title: 'title2',
          description: 'description2',
          create_time: 1657002550
        }
      ]
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getArticleList(this.pageNum).then(res => {
        this.articleList = res.data
      })
    }
  }
}
</script>
