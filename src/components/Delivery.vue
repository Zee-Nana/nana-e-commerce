<template>
    <div id="content">
        <div class="container" >
            <b-card-group deck>
                <b-card header="DELIVERY & RETURN">
                    <b-list-group >
                        <b-list-group-item href="#" class="item">
                         <div class="left"> <i class="fas fa-shipping-fast"></i> </div>
                         <div class="right"> <h7>Nana's Express</h7>
                          <p class="para">Express delivery in main cities. <span><a href="#">Details</a></span></p></div>
                        </b-list-group-item>
                         <b-list-group-item href="#" class="item">
                         <div class="left"> <i class="far fa-paper-plane"></i> </div>
                         <div class="right"> <h7>Delivery Information</h7>
                          <p class="para">Normally delivered between Monday to Friday Working days  . Please check exact dates in the Checkout page.<span><a href="#">See more</a></span></p></div>
                        </b-list-group-item>
                        <b-list-group-item href="#" class="item">
                         <div class="left"> <i class="fas fa-history"></i> </div>
                         <div class="right"> <h7>Return Policy</h7>
                          <p class="para">Free return within 15 days for Jumia Mall items and 7 days for other eligible items.<span><a href="#">See more</a></span></p></div>
                        </b-list-group-item>
                        <b-list-group-item href="#" class="item">
                         <div class="left"> <i class="fas fa-shield-alt"></i> </div>
                         <div class="right"> <h7>Warranty</h7>
                          <p class="para">N/A</p></div>
                        </b-list-group-item>
                    </b-list-group>
                </b-card>     
            </b-card-group>
            <div class="second">   
             <b-card-group deck>
                <b-card header="SELLER INFORMATION">
                    <b-list-group>
                        <b-list-group-item href="#">
                          <div class="left"> <h7>Nana's Empire Store</h7>
                          <p class="para">86% Positive Seller Score
                           <br> 59 Followers</p></div>
                            <div class="right"><b-button class="btn1">Follow</b-button>
                           </div>
                        </b-list-group-item>
                    </b-list-group>
                </b-card>     
            </b-card-group> 
            </div>  
          <!-- <b-list-group>
  <b-list-group-item href="#some-link" class="btn">{{category.name}}</b-list-group-item>
</b-list-group> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Delivery',

    data (){
    return{
    }
  },
}
</script>

<style scoped>
    .container{
        margin-top: 100px;
        /* background-color: red; */
        /* height: 500px */
    }
    .btn{
        /* background-color: ; */
        font-size: 18px;
        font-weight: 100;
        color: rgba(7, 136, 153, 0.932);

    }
    .btn :hover{
        background-color: rgba(7, 136, 153, 0.932);
        color: whitesmoke;
    }
    #content{
        margin-top: 10px;
    }
    .item{
      display: flex;
    }
    .right{
      margin-left: 20px;
      text-align: left;
    }
    .left{
      font-size: 16px;
    }
    .para{
      font-size: 12px;
    }
    .second{
      margin-top: 20px;
      text-align: left;
      /* display: flex; */

    }
    .btn1{
      font-size: 12px;
      width: 100px;
      height: 30px;
      color: white;
      /* float: right; */
    }
</style>