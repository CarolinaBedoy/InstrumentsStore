/*const express = require("express")
const cors = require('cors')
const mysql = require('mysql')
const app = express()
app.use(cors())
*/


var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))
app.use(express.json())


const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'instrumentsstore'
})

/*app.get("/register", (req, res) => {
    /*let name = req.body.name; 
    let mail = req.body.mail; 
    let password = req.body.password; 
    let passwordhash= "aes_encrypt(" + password + " 'clave')"

    //const sql = "INSERT INTO `users`(`name`, `email`, `password`) VALUES ('" + name + "', '" + mail + "', '" + password + "')";
    const sql = "INSERT INTO `users`(`name`, `email`, `password`) VALUES ('mateo', 'mateo', 'mateo')";
    db.query(sql, (err, data) => {
    if(err) return res.json("Error");
    res.send({ status: 'SUCCESS' });
    return res.json(data);
   })
})
*/
app.post('/register', (req, res) => {
    
    /*let passwordhash= "aes_encrypt(" + password + " 'clave')"*/

    const {name, mail, password} = req.body

    const sql = "INSERT INTO `users`(`name`, `email`, `password`) VALUES ('" + name + "', '" + mail + "', '" + password + "')";
    //const sql = "INSERT INTO `users`(`name`, `email`, `password`) VALUES ('mateo', 'mateo', 'mateo')";
    db.query(sql, (err, data) => {
    console.log(
        `username: ${name},
        mail: ${mail}`,
      );
    res.send({ status: 'epic', name, mail, password });
   
    if(err) return res.json("Error");
    return;
   })
})

app.get("/api", (req, res) => {
    return res.json({message: "This is from backend"});
})



app.listen(8081, () => 
{
    console.log("Listening")
})  

