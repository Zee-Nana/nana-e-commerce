 <template>
    <div id="handler">
            <div class="container">
                <b-row>
                    <b-col
                    lg="3"
                    class="pl-0"
                    v-for="item in products" 
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
        <b-img-lazy :src="item.imageLink" alt="Image 1" id="shoe" img-top></b-img-lazy>
            <b-card-text>
               <h6 style="margin-top:2vh"> {{ item.title }} </h6>
                <p><b> &#8358; {{ item.price }}</b> </p>
            </b-card-text>

            <b-button :to="`/product/${item.id}-${item.title.replace(/[' ']+/g,'-').toLowerCase()}`" >Buy Now</b-button>
        </b-card>
        </b-col>
        </b-row>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'Cards',
  computed: {
    products(){
       return this.$store.state.items
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