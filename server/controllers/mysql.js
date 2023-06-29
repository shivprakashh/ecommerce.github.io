
const mysql = require("mysql")

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1111",
    database:"online"
})
con.connect (function(err){
    if(err){
        console.log(err,"this is errror")
    }
    else{
    console.log('connected')}
})
exports.con = con;