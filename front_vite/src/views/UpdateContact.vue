<template>
  <div class="container">
    <div class="card" style="margin:5% 15% 5% 15%">
      <div class="card-header" style="background-color:#777D63;color:white;">
        Edit Contact
      </div>
      <div class="card-body">
        <form @submit="checkForm">
          <div class="well">
            <h4>Edit Contact</h4>
            <div class="form-group">
              <label class="pull-left">Contact ID </label>
              <input type="text" class="form-control" placeholder="Contact ID" v-model="Contact.contact_id" readonly>
            </div>
            <div class="form-group">
              <label class="pull-left">First Name </label><label class="pull-left" style="color:red;">*</label>
              <input type="text" class="form-control" placeholder="First Name" v-model="Contact.firstname">
            </div>
            <div class="form-group">
              <label class="pull-left">Middle Name </label><label class="pull-left" style="color:red;">*</label>
              <input type="text" class="form-control" placeholder="Middle Name" v-model="Contact.middlename">
            </div>
            <div class="form-group">
              <label class="pull-left">Last Name </label><label class="pull-left" style="color:red;">*</label>
              <input type="text" class="form-control" placeholder="Last Name" v-model="Contact.lastname">
            </div>
            <div class="form-group">
              <label class="pull-left">Gender </label><label class="pull-left" style="color:red;">*</label>
              <div class="form-check pull-left" style="margin-left:2rem">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="F"
                  v-model="Contact.gender">
                <label class="form-check-label" for="inlineRadio1">Female</label>
              </div>
              <br>
              <div class="form-check pull-left" style="margin-left:2rem">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="M"
                  v-model="Contact.gender">
                <label class="form-check-label" for="inlineRadio2">Male</label><br>
              </div>
              <!-- <input type="text" class="form-control" placeholder="Gender" v-model="Contact.gender"> -->
            </div>
            <br>
            <div class="form-group">
              <label class="pull-left">Mobile No </label><label class="pull-left" style="color:red;">*</label>
              <input type="text" class="form-control" placeholder="Mobile No" v-model="Contact.mobile">
            </div>
            <div class="form-group">
              <label class="pull-left">Email </label><label class="pull-left" style="color:red;">*</label>
              <input type="text" class="form-control" placeholder="Email" v-model="Contact.email">
            </div>
            <div class="form-group">
              <label class="pull-left">Image URL </label><label class="pull-left" style="color:red;">*</label>
              <input type="text" class="form-control" placeholder="Image Url" v-model="Contact.image">
            </div>
          </div>

          <button type="submit" class="btn btn-large btn-block full-width"
            style="margin-bottom: 10px; background-color:#E2D7B9;">Submit</button>
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
        errors:[]
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
           axios.put('https://egco427-vue-hw-api.herokuapp.com/contacts/update/'+ this.Contact._id,newContact)
            .then(()=>{
                console.log('Update Contact ')
             })
            .catch((error)=>{
                console.log(error) // should have table name of msg Error
            })
            window.location.reload() // reload data in table
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
        this.editContact();
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
  },
  mounted() {
    this.Contact._id=this.$route.params.userId
        axios.get('https://egco427-vue-hw-api.herokuapp.com/contacts/get/'+this.Contact._id)
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
