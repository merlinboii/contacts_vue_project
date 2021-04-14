var express = require('express')
var app = express()
var fs = require('fs') //Read user.json

app.get('/getUsers', function(req,res){
    fs.readFile(__dirname+"/"+"users.json", 'utf8', function(err,data){
        console.log(data) // user.json data
        res.end(data)
    })
})

/*========== Get by parameter ==============*/
app.get('/getUsers/:id', function(req,res){
    fs.readFile(__dirname+"/"+"users.json", 'utf8', function(err,data){
        var users = JSON.parse(data) // String => object
        var user = users["user"+req.params.id]
        res.end(JSON.stringify(user))
        console.log(data) // user.json data
        //res.end(data)
    })
})

/*========== ADD User by obj ==============*/
app.post('/addUsers', function(req,res){
    fs.readFile(__dirname+"/"+"users.json", 'utf8', function(err,data){
        var users = JSON.parse(data) // String => object
        var user = {
                            "name": "Film",
                            "password": "1234",
                            "occupation": "engineer",
                            "id": "4"
                 }
                                    
        users["user4"] = user
        res.send(JSON.stringify(users))
        console.log(data) // user.json data
    })
})

/*========== ADD User by obj to file ==============*/
/* app.post('/addUsers', function(req,res){
    fs.readFile(__dirname+"/"+"users.json", 'utf8', function(err,data){
        var users = JSON.parse(data) // String => object
        var user = {"users4":{
                            "name": "Film",
                            "password": "1234",
                            "occupation": "engineer",
                            "id": "4"
                            }         
                 }
        fs.writeFileSync(__dirname+"/"+"users.json",JSON.stringify(user),function(err,data){
            console.log(data)
        })                     
        users["user4"] = user
        res.send(JSON.stringify(users))
        console.log(data) // user.json data
    })
}) */

/*========== Delete User by id ==============*/
app.delete('/delUsers/:id', function(req,res){
    fs.readFile(__dirname+"/"+"users.json", 'utf8', function(err,data){
        var users = JSON.parse(data) // String => object
        delete users['user'+req.params.id]
        console.log(users) // user.json data
        res.end(JSON.stringify(users))
        
    })
})

/*========== Edit User by id ==============*/
/* app.put('/addUsers', function(req,res){
    fs.readFile(__dirname+"/"+"users.json", 'utf8', function(err,data){
        var users = JSON.parse(data) // String => object
        delete users['user'+req.params.id]
        console.log(data) // user.json data
        res.end(JSON.stringify(users))
        
    })
}) */

var server = app.listen(5000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application run at http://%s:%s", host, port)
})

/* To user json-server (run cmd administrator[alt+shift+enter]) inner must be list / array
json-server can 
            GET POST
            PUT DELETE (by id)
... npm install g- json-server
... json-server --watch <filename.json> 
*/