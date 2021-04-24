<template>
  <div class="container">
    <div class="container" >
      <div class="row ">
        <div class="col" >
          <div class="input-group" style="width:100%; transition: 0.3s; border-radius: 10px; margin :5% 0% 1% 0% ">
            <input type="text" class="form-control" placeholder="Search ..." v-model="search">
            <div class="btn-group" role="group" aria-label="Basic example">
              &nbsp;&nbsp;<button class="btn" type="button" style="background-color:#E2D7B9;">
                <i class="fa fa-search" style="color:#3B3B3B;"></i>
                Search
              </button>
              <router-link to="/addcontact">
                <button class="btn" type="button" style="background-color:#777D63; color:#FFFFFF;">+ Add</button>
              </router-link>
            </div>
            <span class="input-group-btn">

            </span>
          </div><!-- /input-group -->
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
    </div>

    <br>
    <table class="table table-stripped table-borderes">
      <thead>
      </thead>
      <tbody>
        <div class="row card-columns center">
          <div v-for="user_alias in filterContacts" v-bind:key="user_alias.firstname || user_alias.lastname">
            <div class="col-mt3"
              style="width: 16rem; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);transition: 0.3s; border-radius: 10px; margin :10% 0% 0% 10% ">
              <img class="card-img-top" :src="user_alias.image" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{ user_alias.firstname }} {{ user_alias.middlename }} {{ user_alias.lastname }}
                </h5>
                <p class="card-text">Email : {{ user_alias.email }}</p>
                <p class="card-text">Mobile : {{ user_alias.mobile }} </p>
                <div class="card-footer bg-transparent" style="height: 3rem;">
                  <router-link to="/contacts">
                    <button class="btn float-left" style="background-color:#777D63; color:#FFFFFF; " data-toggle="modal"
                      data-target=".bd-example-modal-sm" @click="DELETE(user_alias.firstname)"><i
                        class="fa fa-trash"></i></button>
                  </router-link>
                  <router-link :to="{ path:'updatecontact', name: 'UpdateContact' , params:{userId: user_alias._id} }">
                    <button class="btn float-right" style="background-color:#E2D7B9; color:#3B3B3B; "><i
                        class="fa fa-edit" style="color:#3B3B3B;"></i> Edit</button>
                  </router-link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </tbody>
    </table>
    <br>
    <div class="modal fade bd-example-modal-sm" id="myModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <p>First name : {{ fname }}</p>
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
    axios.get('https://egco427-vue-hw-api.herokuapp.com/contacts/getmany')
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
              return contact.firstname.toLowerCase().match(this.search.toLowerCase()) || contact.lastname.toLowerCase().match(this.search.toLowerCase())
          })
      }
  },
  methods : {
      DELETE(firstname){
          this.fname = firstname
         
      },
      delContact(contact_fname){
           axios.delete('https://egco427-vue-hw-api.herokuapp.com/contacts/delete/'+contact_fname)
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
