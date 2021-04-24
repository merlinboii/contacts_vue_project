<template>
    <div class="container">
        <div class="card" style="margin:13% 30% 5% 30%; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);transition: 0.3s; border-radius: 10px;">
  <div class="card-header" style="background-color:#777D63;color:white;">
    Log in
  </div>
  <div class="card-body">
      </div>
        <div class="row">
            <div class="col-lg-2"/>
            <div class="col-lg-8">
                <label class="pull-left">User Account</label>
                <input type="username" v-model="formData.username" class="form-control" placeholder="username"/> 
                <p class="text-left" v-if="formData.username.length == 0" style="color:red" >*please enter username</p>
                <label class="pull-left" style="margin-top:5px;">Password</label>
                <input type="password" v-model="formData.password" class="form-control" placeholder="password" @keyup.enter="logIn"/>
                <p class="pull-left" v-if="formData.password.length == 0" style="color:red" >*please enter username</p>
                <br>
                <button class="btn  w-50" style="background-color:#E2D7B9; margin-bottom: 15%; color:black;" @click="logIn">Log In</button>
            </div>
            <div class="col-lg-3"/>
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