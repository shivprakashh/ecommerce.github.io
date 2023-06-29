const cons = require("./mysql")
const con = cons.con
exports.food = (req,resp)=>{
    con.query(`select * from data`,(err,result)=>{
     
        if(err){
            console.log(err)
        }
        console.log(result)
   
       
        console.log("h")
        resp.send(result)
    })
}