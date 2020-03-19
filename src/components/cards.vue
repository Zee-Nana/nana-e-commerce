 <template>
    <div id="handler">
            <div class="container">
                <b-row>
                    <b-col
                    lg="3"
                    class="pl-0"
                    v-for="item in items" 
                    :key="item.id"
                    >
        <b-card
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            fluid
        >
        <b-img-lazy v-bind="imageLink" :src="item.imageLink" alt="Image 1" id="shoe" img-top></b-img-lazy>
            <b-card-text>
               <h6 style="margin-top:2vh"> {{ item.title }} </h6>
                <p><b> &#8358; {{ item.price }}</b> </p>
            </b-card-text>

            <b-button href="#" >Buy Now</b-button>
        </b-card>
        </b-col>
        </b-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cards',
    // props : ['product']
     data(){
    return{
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
  }
}
</script>

<style scoped>
    #shoe{
        width: 200px;
        height: 150px;
    }
    .container{
        margin: 10px 0px 0px 0px;
        /* width: 150vh;
        height: 100vh; */
        /* display: inline-block; */
    }
    #handler{
        display: inline-block;
        /* margin-top: 50px; */
    }
</style>