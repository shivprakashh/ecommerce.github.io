 const cons = require("./mysql")
 const con = cons.con
   exports.login = (req,resp)=>{
    console.log(req.body);
    const{user,pass} = JSON.parse(req.body.data)
    console.log(user,pass)
    if(user.length <12 && pass.length <12 ){
      if(user.includes("=") && pass.includes("=")){
        resp.send("sorry")
      }else{
    
    con.query(`select * from login where user = "${user}" and pass = "${pass}"`,(err,result)=>{
        if(err){
            resp.send("err") 
        console.log(err,"err")
    }

   if(result.length >0){
    resp.send("successful")
    console.log("success")
console.log(result,"result")
   }   else{
    resp.send("err");
    console.log("err")
   }

    })}
}
    else{
        resp.send("sorry")
    }
    
}