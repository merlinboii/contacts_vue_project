<template>
  <div class="container">
    <div class="card" style="margin:5% 15% 5% 15%">
  <div class="card-header" style="background-color:#777D63;color:white;">
    Add Contact
  </div>
  <div class="card-body">
    <form @submit="checkForm">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" v-bind:key="error.value">{{ error }}</li>
        </ul>
      </p>
      <div class="well">
        <div class="form-group" >
          <label class="pull-left">Contact ID</label>
          <input type="text" class="form-control" placeholder="Contact ID" v-model="Contact.contact_id" readonly>
        </div>
        <div class="form-group" >
          <label class="pull-left">First Name </label><label class="pull-left" style="color:red;">*</label>
          <input type="text" class="form-control" placeholder="First Name" v-model="Contact.firstname" required>
        </div>
        <div class="form-group" >
          <label class="pull-left">Middle Name </label><label class="pull-left" style="color:red;">*</label>
          <input type="text" class="form-control" placeholder="Middle Name" v-model="Contact.middlename" required>
        </div>
        <div class="form-group" >
          <label class="pull-left">Last Name </label><label class="pull-left" style="color:red;">*</label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="Contact.lastname" required>
        </div>
        <div class="form-group" >
          <label class="pull-left">Gender </label><label class="pull-left" style="color:red;">*</label>
          <input type="text" class="form-control" placeholder="Gender" v-model="Contact.gender" required>
        </div>
        <div class="form-group" >
          <label class="pull-left">Mobile No </label><label class="pull-left" style="color:red;">*</label>
          <input type="text" class="form-control" placeholder="Mobile No" v-model="Contact.mobile" required>
          
        </div>
        <div class="form-group" >
          <label class="pull-left">Email </label><label class="pull-left" style="color:red;">*</label>
          <input type="text" class="form-control" placeholder="Email" v-model="Contact.email" required>
        </div>
        <div class="form-group">
          <label class="pull-left">Image URL </label>
          <input type="text" class="form-control" placeholder="Image Url" v-model="Contact.image">
        </div>
      </div>
      <button type="submit" class="btn btn-large btn-block full-width"  style="margin-bottom: 10px; background-color:#E2D7B9;">Submit</button>
      <router-link to="/contacts">
      <a href="#" class="card-link" style="color:#777D63;">Back to Main Page</a>
      </router-link>  
    </form>
  </div>
</div>
    
  </div>

</template>

<script>
import axios from 'axios'
 let contact_id = Math.floor(1000 + Math.random() * 9000)

export default {
  name: 'AddContact',
  data() {
    return {
        Contact: {
            contact_id: contact_id ,
            firstname : '',
            lastname : '',
            middlename : '', 
            gender :  '' ,
            mobile :  '' ,
            email :  '' ,
            image : '' 
        },
        errors:[]
    }
  },
  methods : {
      addToAPI(){
          let newContact = {
            contact_id: this.Contact.contact_id,
            firstname: this.Contact.firstname,
            middlename: this.Contact.middlename,
            lastname: this.Contact.lastname,
            gender: this.Contact.gender,
            mobile: this.Contact.mobile,
            email: this.Contact.email,
            image: this.Contact.image
          }
          axios.post('https://egco427-vue-hw-api.herokuapp.com/contacts/add/',newContact)
            .then((response)=>{
                console.log(response.data)
                this.status = 'Add contact successfully'
                alert(this.status)
             })
            .catch((error)=>{
                console.log(error) // should have table name of msg Error
            })
      },
      checkForm(e){
      this.errors = [];
      if (!this.validEmail(this.Contact.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.validMobile(this.Contact.mobile)) {
        this.errors.push('Valid mobile required.');
      }

      if (!this.errors.length) {
        this.addToAPI();
      }
      else{
        alert(this.errors.toString())
      }
      e.preventDefault()

    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validMobile(mobile){
      var re = /[0-9]/;
      return re.test(mobile);
    }
  }
}
</script>
