<template>
    <div>
        <TopNavBar />
        <Header />
        <AppMain />
        <Footer />
    </div>
</template>

<script>
import { AppMain, Footer, Header, TopNavBar } from './components'

export default {
    name: 'Layout',
    components: {
        AppMain,
        Footer,
        Header,
        TopNavBar
    }
}
</script>
