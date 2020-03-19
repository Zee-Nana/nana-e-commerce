<template>
    <div id="content">
        <div class="container" >
            <b-card-group deck>
                <b-card header="Categories">
                    <b-list-group v-for="stuff in stuffs" :key="stuff.id">
                        <b-list-group-item href="#">{{stuff.name}}</b-list-group-item>
                    </b-list-group>
                </b-card>     
            </b-card-group>   
          <!-- <b-list-group>
  <b-list-group-item href="#some-link" class="btn">{{category.name}}</b-list-group-item>
</b-list-group> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',

  data (){
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
         {
          id: 6,
          name: 'Car Batteries',
        },
     ],
    }
  },
}
</script>

<style scoped>
    .container{
        margin-top: 20px;
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
        /* @media screen and (max-width: 480px) {
  .btn{width: 500px;font-size: 14px; height: 150px;}

} */
</style>