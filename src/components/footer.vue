<template>
    <div>
        <!-- Footer -->
<footer class="page-footer font-small"  style="background-color: #6c757d">

  <!-- Footer Links -->
  <div class="container text-center text-md-left">

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-3 mx-auto">

        <!-- Links -->
        <h6 class="font-weight-bold text-uppercase mt-3 mb-4">LET US HELP YOU</h6>

        <ul class="list-unstyled" v-for="first in firsts" :key="first.id">
          <li>
            <a href="#!">{{first.name}}</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-3 mx-auto">

        <!-- Links -->
        <h6 class="font-weight-bold text-uppercase mt-3 mb-4">ABOUT NANA'S EMPIRE</h6>

        <ul class="list-unstyled" v-for="second in seconds" :key="second.id">
          <li>
          <li>
            <a href="#!">{{second.name}}</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-3 mx-auto">

        <!-- Links -->
        <h6 class="font-weight-bold text-uppercase mt-3 mb-4">MAKE MONEY WITH NANA'S EMPIRE</h6>

        <ul class="list-unstyled" v-for="third in thirds" :key="third.id">
          <li>
            <a href="#!">{{third.name}}</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-3 mx-auto">

        <!-- Links -->
        <h6 class="font-weight-bold text-uppercase mt-3 mb-4">NANA'S EMPIRE INTERNATIONAL</h6>

        <ul class="list-unstyled" v-for="fourth in fourths" :key="fourth.id">
          <li>
            <a href="#!">{{fourth.name}}</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>

  <!-- <div class="container"> -->
  <div class="row" style="margin-top:30px">
    <div class="col-sm-4" >
        <h6>JOIN US ON</h6>
        <!--Facebook-->
<a class="fb-ic mr-3" role="button"><i class="fab fa-lg fa-facebook-f"></i></a>
<!--Twitter-->
<a class="tw-ic mr-3" role="button"><i class="fab fa-lg fa-twitter"></i></a>
<!--Youtube-->
<a class="yt-ic mr-3" role="button"><i class="fab fa-lg fa-youtube"></i></a>
<!--Instagram-->
<a class="ins-ic mr-3" role="button"><i class="fab fa-lg fa-instagram"></i></a>
<!--Email-->
<a class="email-ic mr-3" role="button"><i class="far fa-lg fa-envelope"></i></a>

    </div>
  <!-- </div> -->
    <div class="col-sm-8"><h6> PAYMENT METHODS & DELIVERY PARTNERS</h6>
        <a class="vis-ic mr-3" role="button"><i class="fab fa-cc-visa"></i></a>
        <a class="ama-ic mr-3" role="button"><i class="fab fa-amazon"></i></a>
         <a class="pay-ic mr-3" role="button"><i class="fab fa-amazon-pay"></i></a>
          <a class="ama-ic mr-3" role="button"><i class="fab fa-cc-mastercard"></i></a>
    </div>
  </div>
  <!-- Footer Links -->

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Project:
    <a href="#"> ABDULRAHEEM ZAINAB</a>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->
    </div>
</template>

<script>
export default {
    name: 'Footer',

    data (){
    return{
       firsts:[
        {
          id: 1,
          name: 'Help Centre',
        },
          {
          id: 2,
          name: 'Contact',
        },
          {
          id: 3,
          name: "How to shop on Nana's Empire",
        },
          {
          id: 4,
          name: "How to return a product on Nana's Empire",
        },
          {
          id: 5,
          name: 'Corporate and biult purchases',
        },
     ],
     seconds:[
        {
          id: 1,
          name: 'About Us',
        },
          {
          id: 2,
          name: "Nana's Empire Careers",
        },
          {
          id: 3,
          name: "Terms and Conditions",
        },
          {
          id: 4,
          name: "Policy Privacy",
        },
          {
          id: 5,
          name: 'Tech Week',
        },
         {
          id: 6,
          name: 'Stay Sale',
        },
     ],
      fourths:[
        {
          id: 1,
          name: 'Algeria',
        },
          {
          id: 2,
          name: 'Egypt',
        },
          {
          id: 3,
          name: "Ghana",
        },
          {
          id: 4,
          name: "Kenya",
        },
          {
          id: 5,
          name: 'Morrocco',
        },
     ],
      thirds:[
        {
          id: 1,
          name: "Sell on Nana's Empire",
        },
          {
          id: 2,
          name: 'Become a Sales Consultant',
        },
          {
          id: 3,
          name: "Become a Nana's Empire Vendor Service Provider",
        },
          {
          id: 4,
          name: "Become an Affilate Partner",
        },
          {
          id: 5,
          name: 'Become a Logistics Service Partner',
        },
     ],
    }
  },
}
</script>

<style scoped>
    .container{
        display: flex;
    }
</style>