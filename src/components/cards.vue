 <template>
    <div id="handler">
            <div class="container" >
        <b-card
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            fluid
        >
        <b-img-lazy v-bind="imageLink" :src="product.imageLink" alt="Image 1" id="shoe" img-top></b-img-lazy>
            <b-card-text>
               <h6 style="margin-top:2vh"> {{ product.title }} </h6>
                <p><b> &#8358; {{ product.price }}</b> </p>
            </b-card-text>

            <b-button href="#" >Buy Now</b-button>
        </b-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cards',
    props : ['product']
}
</script>

<style scoped>
    #shoe{
        width: 250px;
        height: 170px;
    }
    .container{
        margin: 10px 0px 0px 0px;
        /* display: inline-block; */
    }
    #handler{
        display: inline-block;
        /* margin-top: 50px; */
    }
</style>