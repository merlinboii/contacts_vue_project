<template>
  <div class="container">
    <div class="card"
      style="">
      <div class="card-header" style="background-color:#777D63;color:white;">
        Log in
      </div>
      <div class="card-body">
        <div class="row" >
          <div>
          <label class="pull-left">User Account</label>
          <input type="username" v-model="formData.username" class="form-control" placeholder="username" />
          <p class="text-left" v-if="formData.username.length == 0" style="color:red">*please enter username</p>
          <label class="pull-left" style="margin-top:5px;">Password</label>
          <input type="password" v-model="formData.password" class="form-control" placeholder="password"
            @keyup.enter="logIn" />
          <p class="text-left" v-if="formData.password.length == 0" style="color:red">*please enter username</p>
          </div>
          <button id="loginButton" class="btn  w-50" @click="logIn" style="background-color:#E2D7B9; margin-bottom: 15%; margin-top: 10%; color:black;">Log In</button>
      </div>
      </div>
      
    </div>
  </div>
</template>
<script>

export default {
    name: 'SignIn',
    data() {
        return {
            formData: {
                username: '',
                password: ''
            },
            errorMessgae: '',
            succeessMessage: ''
        }
    },
    methods: {
        logIn() {
            if (this.formData.username == 'bob' && this.formData.password =='1234'){
                this.$router.replace('/contacts')
                this.succeessMessage = "Success"
            }
            else{
                this.errorMessgae = "Username or Password is incorrect"
                alert(this.errorMessgae)
                    
            }
        }
    },
}
</script>

<style scoped>
@media screen and (min-width: 601px) {
.card {
    margin: 10% 30% 0% 30%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s; 
    border-radius: 10px;
  }
  .row{
    margin: 2rem 0rem 0rem 3rem
  }
  #loginButton{
    background-color:#E2D7B9; 
    margin-bottom: 15%; 
    margin-bottom: 15%;
    color:black;
  }
}
@media screen and (max-width: 600px) {
.card {
    margin: 10% 10% 0% 10%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s; 
    border-radius: 10px;
  }
  .row{
    margin: 2rem 2rem 0rem 2rem
  }
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>