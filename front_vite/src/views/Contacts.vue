<template>
    <div class="container">
        <h4 style=" margin-top: 20px;  margin-bottom: 10px;">List of Users</h4>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for..." v-model="search">
                <span class="input-group-btn">
                  &nbsp;&nbsp;<button class="btn btn-primary" type="button">
                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                    Search
                  </button>
                </span>
              </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->
          </div><!-- /.row -->
        </div>
        <br>
        <table class="table table-stripped table-borderes">
            <thead>
                <tr>
                <th class="center">First Name</th>
                <th class="center">Middle Name</th>
                <th class="center">Last Name</th>
                <th class="center">Mobile</th>
                <th class="center">Email</th>
                <th class="center">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user_alias in filterContacts" v-bind:key="user_alias.firstname || user_alias.lastname" >
                <!-- <tr v-for="user_alias in Users" v-bind:key="user_alias.id"> -->
                    <td class="text-left">{{ user_alias.firstname }}</td>
                    <td class="text-left">{{ user_alias.middlename }}</td>
                    <td class="text-left">{{ user_alias.lastname }}</td>
                    <td class="text-left">{{ user_alias.mobile }}</td>
                    <td class="text-left">{{ user_alias.email }}</td>
                    <td class="text-left">
                        <router-link :to="{ path:'updatecontact', name: 'UpdateContact' , params:{userId: user_alias._id} }">
                          <button class="btn btn-xs btn-warning">Edit</button>&nbsp;
                        </router-link>   
                         <router-link to="/contacts">
                          <button class="btn btn-xs btn-danger" data-toggle="modal" data-target=".bd-example-modal-sm" @click="DELETE(user_alias.firstname)"><span class="glyphicon glyphicon-trash">Delete</span></button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link to="/addcontact">
            <button class="btn btn-large btn-block btn-success full-width">Add Contact</button>
        </router-link>
        <br>
    <div class="modal fade bd-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Delete contact</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this contact 
            <br>
            <p >First name : {{ fname }}</p>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <router-link to="/contacts">
                 <button type="button" class="btn btn-danger" @click="delContact(fname)">Delete</button>
              </router-link>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'

export default {
  name: 'Contacts',
  data() {
    return {
        Contacts:[],
        search:'', // ผูกกับ  v-model="search"
        uid:'',
        fname:''
    }
  },
  mounted() {
    axios.get('http://localhost:5000/contacts/getmany')
         .then((response)=>{
             console.log(response.data)
             this.Contacts = response.data // .data is default prop of response
         })
         .catch((error)=>{
             console.log(error) // should have table name of msg Error
         })
  },
  computed : {
      filterContacts: function(){
          return this.Contacts.filter((contact)=>{
              return contact.firstname.match(this.search) || contact.lastname.match(this.search)
          })
      }
  },
  methods : {
      DELETE(firstname){
          this.fname = firstname
         
      },
      delContact(contact_fname){
           axios.delete('http://localhost:5000/contacts/delete/'+contact_fname)
            .then(()=>{
                console.log('Delete firstname: '+contact_fname)
             })
            .catch((error)=>{
                console.log(error) // should have table name of msg Error
            })
            window.location.reload() // reload data in table
      }
  }
}
</script>
