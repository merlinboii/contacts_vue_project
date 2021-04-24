const { Router } = require('express')
var express = require('express')
var app = express()

port = process.env.PORT || 80
var mongoose = require('mongoose')

Contact = require('./api/model/contactListModel')
Account = require('./api/model/contactListModel')
bodyParser = require('body-parser')
mongoose.Promise = global.Promise

var mongo_uri = 'mongodb+srv://admin:admin@contactdb.gc4ab.mongodb.net/ContactList?retryWrites=true&w=majority'
mongoose.connect(mongo_uri,{ useNewUrlParser: true, useUnifiedTopology: true },function(err){
    if(err) throw err
    console.log('Sucessfully connected')
})

const cors = require('cors') // cross side origin
app.use(cors())

app.use(bodyParser.urlencoded({extended: true})) // user body-parser for input json data
app.use(bodyParser.json())

var route = require('./api/routes/contactListRoutes')
route(app)
app.listen(port)
console.log('User List Server started on : '+port)
