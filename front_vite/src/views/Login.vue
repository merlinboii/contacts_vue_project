<template>
    <div class="container">
        <h1>Log In</h1>
        <br><br>
        <div class="row">
            <div class="col-lg-3"/>
            <div class="col-lg-6">
                <input type="username" v-model="formData.username" class="form-control" placeholder="username"/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" v-model="formData.password" class="form-control" placeholder="password"/>
                <br> 
                <button class="btn btn-success btn-block full-width" @click="logIn">Log In</button>
            </div>
            <div class="col-lg-3"/>
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