<template>
    <div style="margin-top: 100px" class="container">
<b-container class="bv-example-row">
        <b-row>
    <b-col cols="8"><div class="form-group">
    <label for="example1"><b>Name Input</b></label>
    <input type="text" id="example1" class="form-control"  placeholder="username" v-model="username"></div>
    </b-col>
    <b-col cols="4"><b-button variant="success"  @click="addUser">Add User</b-button></b-col>
  </b-row>
</b-container>
         
     <!-- <b-button variant="success"  @click="addUser">Add User</b-button> -->
  
  
        <!-- <input type="text" placeholder="username" v-model="username" /> -->
        <!-- <button type="submit" @click="addUser">add</button> -->
        <b-card-group deck>
  <b-card header="Registered Users">
    <b-list-group>
      <b-list-group-item href="#">
           <ul class="list-group">
            <li class="list-group-item" v-for="user in users" :key="user.id" right> {{user.name}}
            <button type="submit" @click="removeUser" class="btn" left>Del</button>

            </li>
        </ul>
      </b-list-group-item>
    </b-list-group>
      </b-card>
</b-card-group>
        <!-- <ul class="list-group">
            <li class="list-group-item" v-for="user in users" :key="user.id" right> {{user.name}}
            <button type="submit" @click="removeUser" class="btn" left>Del</button>

            </li>
        </ul> -->
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            users: [],
            username: ''
        }
    },
    methods:{
         addUser(){
             let username = {
                name: this.username
             }
              this.users.unshift(username)
             this.username = ""
        },
         removeUser(){
             let username = {
                name: this.username
             }
              this.users.shift(username)
             this.username = ""
        }
    },
    async created() {
        let fetchUsers = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(fetchUsers);

        this.users = fetchUsers.data;
    }
}
</script>

<style scoped>
    .list-group{
        display: flexbox;
        justify-content: center;
    }
    .btn{
        background-color: red;
        color: aliceblue;
        float: left;
        margin-top: 30px;
    }
</style>