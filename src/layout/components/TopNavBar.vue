<template>
  <!-- Navigation-->
  <nav id="mainNav" class="navbar navbar-expand-lg navbar-light">
    <div class="container px-4 px-lg-5">
      <router-link :to="'/'" class="navbar-brand">
        Mashiro
      </router-link>
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
          <li class="nav-item">
            <router-link :to="'/'" class="nav-link px-lg-3 py-3 py-lg-4">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="'/'" class="nav-link px-lg-3 py-3 py-lg-4">
              About
            </router-link>
          </li>
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

<style scoped></style>
