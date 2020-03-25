<template>
  <div class="product">
     <!--Main layout-->
      <b-container class="bv-example-row" fluid>
    <b-row>
     <b-col cols="9" class="main" >
  <main class="mt-5 pt-4" v-for="product in productItem" :key="product.id">
    <div class="container dark-grey-text mt-5">

      <!--Grid row-->
      <div class="row wow fadeIn">

        <!--Grid column-->
        <div class="col-md-6 mb-4">

          <img :src="product.imageLink" class="img-fluid" alt="" style="width:500px;height:300px">
          <!-- <mdb-carousel :src="product.imageLink" :items="thumbnailCarousel" thumbnails :interval="8000"></mdb-carousel> -->

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-6 mb-4">

          <!--Content-->
          <div class="p-4">

            <div class="mb-3">
              <a href="">
                <span class="badge purple mr-1">Category: {{ product.id }}</span>
              </a>
              <a href="">
                <span class="badge blue mr-1">New</span>
              </a>
              <a href="">
                <span class="badge red mr-1">Bestseller</span>
              </a>
            </div>

            <p class="lead">
              <!-- <span class="mr-1">
                <del>$200</del>
              </span> -->
              <span><b> &#8358;{{ product.price }} </b></span>
            </p>

            <p class="lead font-weight-bold">{{ product.title }}</p>

            <p>{{ product.discription }}</p>

            <form class="d-flex justify-content-left">
              <!-- Default input -->
              <input type="number" value="1" aria-label="Search" class="form-control" style="width: 100px">
              <button class="btn btn-primary btn-md my-0 p" type="submit">Add to cart
                <i class="fas fa-shopping-cart ml-1"></i>
              </button>

            </form>

          </div>
          <!--Content-->

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

      <hr>

      <!--Grid row-->
      <div class="row d-flex justify-content-center wow fadeIn">

        <!--Grid column-->
        <div class="col-md-6 text-center">

          <h4 class="my-4 h4">Additional information</h4>

          <p>{{ product.additional }}</p>

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

      <!--Grid row-->
      <div class="row wow fadeIn" id="image">

        <!--Grid column-->
        <div class="col-lg-4 col-md-4 mb-4">

          <img :src="product.image1" class="img-fluid" alt="" style="width:300px;height:200px">

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-4 mb-4">

          <img :src="product.image2" class="img-fluid" alt="" style="width:300px;height:150px">

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-4 mb-4">

          <img :src="product.image3" class="img-fluid" alt="" style="width:300px;height:150px">

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

    </div>
  </main>
  </b-col>
  <!--Main layout-->
  <b-col cols="3"><Delivery /></b-col>
  </b-row>
  </b-container>
  </div>
</template>
<script>
import Delivery from '../components/Delivery.vue'
export default {
  name: 'Product',
   components: {
    Delivery,
   },
  data(){
    return {
      productItem: [],
      // imageMe:[]
    }
  },
  created() {
    this.productItem = this.$store.state.items.filter((item) => {
   return item.id === parseInt(this.$route.params.id);
    });
  // console.log(this.productItem);
  }
}
</script>

<style scoped>
  /* #image{
    width: 300px;
    height: 150px
  } */
</style>