<template>
  <!-- Navigation-->
  <nav id="mainNav" class="navbar navbar-expand-lg navbar-light">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="index.html">Mashiro</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars" />
      </button>
      <div id="navbarResponsive" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto py-4 py-lg-0">
          <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import '@/style/styles.css'
export default {
  name: 'TopNavBar'
}
</script>

<style scoped>
</style>
