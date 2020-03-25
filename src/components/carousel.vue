<template>
  <div id="app">
    <Slider
      animation="fade"
      v-model="sliderValue"
      :duration="10000"
      :speed="4000" 
    >
      <SliderItem
        v-for="image in lists" 
        :key="image.id">
        <img :src="image.Slide" class="img" />
        
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";
 
export default {
  name: "carousel",
  components: {
    Slider,
    SliderItem
  },
  data() {
    return {
      lists: [

        {
            id: 1,
            Slide: require("@/assets/advert.jpg"),
        },
          {
            id: 2,
            Slide: require("@/assets/advert1.webp"),
        },
         {
            id: 3,
            Slide: require("@/assets/advert2.jpg"),
        },
         {
            id: 4,
            Slide: require("@/assets/advert3.webp"),
        }
      ],
      sliderValue: 2
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  /* height: 1000px; */
}

.img{
    width: 100%;
    height: 100%;
}
</style>
