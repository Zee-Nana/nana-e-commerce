<template>
<div>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="secondary" fixed = "top">
      <b-navbar-brand href="#" id="name">Nana's Empire</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
       

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" right>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"><i class="fas fa-shopping-cart" style="font-size:16px"></i></b-button>
            <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item href="#">Shopping</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
            <b-nav-item href="#">About</b-nav-item>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
 </div> 
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header{
  margin-bottom: 0vh;
}
#name{
  font-size: 30px;
  font-family: Helvetica;
}
</style>
