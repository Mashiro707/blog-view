<template>
  <div>
    <TopNavBar />
    <AppMain />
    <Footer />
  </div>
</template>

<script>
import { AppMain, Footer, TopNavBar } from './components'
export default {
  name: 'Layout',
  components: {
    Footer,
    TopNavBar,
    AppMain
  }
}
</script>
