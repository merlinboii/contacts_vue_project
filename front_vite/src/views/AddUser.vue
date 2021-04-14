<template>
  <div class="container">
    <form>
      <div class="well">
        <h4>Add User</h4>
        <div class="form-group" >
          <label class="pull-left">First Name: </label>
          <input type="text" class="form-control" placeholder="First Name" v-model="User.firstName">
        </div>
        <div class="form-group" >
          <label class="pull-left">Last Name: </label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="User.lastName">
        </div>
        <div class="form-group" >
          <label class="pull-left">Email: </label>
          <input type="text" class="form-control" placeholder="Email" v-model="User.email">
        </div>
      </div>
      
      <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="addToAPI" style="margin-bottom: 10px;">Submit</button>
      <router-link to="/">
      <button class="btn btn-large btn-block btn-success full-width">Go to User List Page</button>  
      </router-link>  
    </form>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'AddUser',
  data() {
    return {
        User: {
            firstName: '',
            lastName: '',
            email: ''
        }
    }
  },
  methods : {
      addToAPI(){
          let newUser = {
            firstName: this.User.firstName,
            lastName: this.User.lastName,
            email: this.User.email
          }
          axios.post('http://localhost:5000/users',newUser)
            .then((response)=>{
                console.log(response.data)
                this.Users = response.data // .data is default prop of response
             })
            .catch((error)=>{
                console.log(error) // should have table name of msg Error
            })
      }
  }
}
</script>
