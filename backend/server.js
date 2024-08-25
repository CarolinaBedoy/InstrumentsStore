/*const express = require("express")
const cors = require('cors')
const mysql = require('mysql')
const app = express()
app.use(cors())
*/


var express = require('express')
const cors = require('cors')
var app = express()
app.use(cors())
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.json())


const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'instrumentsstore'
})


app.post('/register', (req, res) => {
    

    

    const obj = JSON.parse(JSON.stringify(req.body));
    const passwordhash= "aes_encrypt(" + obj.password + " 'clave')"

    const sql = "INSERT INTO `users`(`name`, `email`, `password`) VALUES ('" + obj.name + "', '" + obj.mail + "', '" + obj.password + "')";
    //const sql = "INSERT INTO `users`(`name`, `email`, `password`) VALUES ('mateo', 'mateo', 'mateo')";
    db.query(sql, (err, data) => {
    console.log(obj);
    res.send({ status: 'success'});
    if(err) return res.json("Error");
    return;
   })
})

app.get("/api", (req, res) => {
    return res.json({message: "This is from backend"});
})

app.post("/prueba", (req, res) => {
    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
    console.log('hi?')
    console.log(obj) // { title: 'product' }
    console.log("wtf", obj.caro)
})



app.listen(8081, () => 
{
    console.log("Listening")
})  

