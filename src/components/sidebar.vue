<template>
    <div id="app">
        <div class="container" >
          <b-list-group>
  <b-list-group-item href="#some-link" class="btn">{{category.name}}</b-list-group-item>
</b-list-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
 
    props : ['category']
}
</script>

<style scoped>
    .container{
        margin-top: 10px;
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
</style>