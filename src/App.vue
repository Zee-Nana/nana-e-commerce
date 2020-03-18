<template>
  <div id="app">
    <div>
       <HelloWorld />
    </div>
    <div>
      <b-container class="bv-example-row" fluid>
    <b-row>
      <b-col cols="3"><Sidebar v-for="stuff in stuffs" :category='stuff' :key="stuff.id" /></b-col>
      <b-col cols="9">
        <carousel />
        <Cards v-for="item in items" :product='item' :key="item.id" />
      </b-col>
    </b-row>
  </b-container>
</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/sidebar.vue'
import Cards from './components/cards.vue'
import carousel from './components/carousel.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Sidebar,
    Cards,
    carousel
  },
  
  data(){
    return{
      stuffs:[
        {
          id: 1,
          name: 'Car Engines',
        },
          {
          id: 2,
          name: 'Car Seat Accessories',
        },
          {
          id: 3,
          name: 'Car Windscreens',
        },
          {
          id: 4,
          name: 'Car Decoration Accessories',
        },
          {
          id: 5,
          name: 'Car Bumpers',
        },
     ],
     items:[
       {
          id: 1,
          title: 'Car Engine',
          imageLink: require("@/assets/engine.jpg"),
          discription: "this is our products",
          price: '1.6 Million'
        },
         {
          id: 2,
          title: 'Fancy Car Carpet',
          imageLink: require("@/assets/car-carpet.jpg"),
          discription: "this is our products",
          price: '30,000'
        },
           {
          id: 3,
          title: 'Car Airfreshner',
          imageLink: require("@/assets/freshner.jpg"),
          discription: "this is our products",
          price: '7,000'
        },
           {
          id: 4,
          title: 'Tyre Bump Inflator',
          imageLink: require("@/assets/inflator.jpg"),
          discription: "this is our products",
          price: '45,000'
        },
         {
          id: 5,
          title: 'Car Tyre',
          imageLink: require("@/assets/tyre.jpg"),
          discription: "this is our products",
          price: '50,000'
        },
         {
          id: 6,
          title: 'Toyota Windscreen',
          imageLink: require("@/assets/windscreen.png"),
          discription: "this is our products",
          price: '120,000'
        },
         {
          id: 7,
          title: 'Car Tyre-rims ',
          imageLink: require("@/assets/reem.jpg"),
          discription: "this is our products",
          price: '30,000'
        },
         {
          id: 8,
          title: 'Front-Bumper',
          imageLink: require("@/assets/bumper.jpg"),
          discription: "this is our products",
          price: '45,000'
        },
         {
          id: 9,
          title: 'Girly-Decoration',
          imageLink: require("@/assets/pinky-dec.webp"),
          discription: "this is our products",
          price: '37,000'
        }
     ]
    }
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
/* .float{
  display: block;
} */
</style>
