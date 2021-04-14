// create for input data from database
'use strict'
var mongoose = require('mongoose')

var Schema = mongoose.Schema

var ContactSchema = new Schema({
  contact_id: {type : String , required : 'Please Enter contact id'} ,
  firstname : {type : String , required : 'Please Enter firstname'},
  lastname : {type : String },
  middlename : {type : String }, 
  gender :  {type : String , required : 'Please Enter gender'} ,
  email :  {type : String , required : 'Please Enter email'} ,
  mobile :  {type : String , required : 'Please Enter mobile'} ,
  image : {type : String } 
})

module.exports= mongoose.model('Contacts', ContactSchema) //(<collection_name>,<schema>)