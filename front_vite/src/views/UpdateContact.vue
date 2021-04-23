<template>
  <div class="container" >
    <form>
      <div class="well">
        <h4>Edit Contact</h4>
         <div class="form-group" >
          <label class="pull-left">Contact ID: </label>
          <input type="text" class="form-control" placeholder="Contact ID" v-model="Contact.contact_id" readonly>
        </div>
        <div class="form-group" >
          <label class="pull-left">First Name: </label>
          <input type="text" class="form-control" placeholder="First Name" v-model="Contact.firstname">
        </div>
        <div class="form-group" >
          <label class="pull-left">Middle Name: </label>
          <input type="text" class="form-control" placeholder="Middle Name" v-model="Contact.middlename">
        </div>
        <div class="form-group" >
          <label class="pull-left">Last Name: </label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="Contact.lastname">
        </div>
        <div class="form-group" >
          <label class="pull-left">Gender: </label>
          <input type="text" class="form-control" placeholder="Gender" v-model="Contact.gender">
        </div>
        <div class="form-group" >
          <label class="pull-left">Mobile No: </label>
          <input type="text" class="form-control" placeholder="Mobile No" v-model="Contact.mobile">
        </div>
        <div class="form-group" >
          <label class="pull-left">Email: </label>
          <input type="text" class="form-control" placeholder="Email" v-model="Contact.email">
        </div>
        <div class="form-group" >
          <label class="pull-left">Image URL: </label>
          <input type="text" class="form-control" placeholder="Image Url" v-model="Contact.image">
        </div>
      </div>
      
      <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="editContact()" style="margin-bottom: 10px;">Submit</button>
      <router-link to="/contacts">
      <button class="btn btn-large btn-block btn-success full-width">Go to User List Page</button>  
      </router-link>  
    </form>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'UpdateContact',
  data() {
    return {
        Contact: {
            _id:'',
            contact_id: '' ,
            firstname : '',
            lastname : '',
            middlename : '', 
            gender :  '' ,
            mobile :  '' ,
            email :  '' ,
            image : '' 
        },
    }
  },
  methods : {
      editContact(){
        this.Contact._id=this.$route.params.userId
        let newContact = {
            _id:this.Contact._id,
            contact_id: this.Contact.contact_id,
            firstname: this.Contact.firstname,
            middlename: this.Contact.middlename,
            lastname: this.Contact.lastname,
            gender: this.Contact.gender,
            mobile: this.Contact.mobile,
            email: this.Contact.email,
            image: this.Contact.image
          }
           axios.put('http://localhost:5000/contacts/update/'+ this.Contact._id,newContact)
            .then(()=>{
                console.log('Update Contact ')
             })
            .catch((error)=>{
                console.log(error) // should have table name of msg Error
            })
            window.location.reload() // reload data in table
      }
  },
  mounted() {
    this.Contact._id=this.$route.params.userId
        axios.get('http://localhost:5000/contacts/get/'+this.Contact._id)
         .then((response)=>{
             console.log(response.data)
             this.Contact = response.data // .data is default prop of response
             return this.Contact
         })
         .catch((error)=>{
             console.log(error) // should have table name of msg Error
         })
  }
}
</script>
