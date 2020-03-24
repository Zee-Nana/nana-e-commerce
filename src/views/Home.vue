<template>
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
</template>
<script>
import Sidebar from '../components/sidebar.vue'
import Cards from '../components/cards.vue'
import carousel from '../components/carousel.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Cards,
    carousel
  },
}
</script>