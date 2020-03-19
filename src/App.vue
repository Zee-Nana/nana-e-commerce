<template>
  <div id="app">
    <div>
       <HelloWorld />
    </div>
    <div>
      <b-container class="bv-example-row" fluid>
    <b-row>
      <b-col cols="3" class="side" ><Sidebar /></b-col>
      <b-col cols="9" class="main" >
        <carousel />
        <Cards  />
      </b-col>
    </b-row>
  </b-container>
</div>
      <div>
       <Footer />
      </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/sidebar.vue'
import Cards from './components/cards.vue'
import carousel from './components/carousel.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Sidebar,
    Cards,
    carousel,
    Footer
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  /* margin-top: 60px; */
}
    /* @media screen and (min-width: 480px) {
  .main{width: 70%;};
  .side{width: 250%;}
} */
</style>
