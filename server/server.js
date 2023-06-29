const express= require("express");
const app = express();
const bodyparser = require("body-parser")
const cons = require("./controllers/mysql")
const con = cons.con;
const cors = require("cors");
const multer = require("multer")
const nodemailer = require("nodemailer")


 


app.use(bodyparser.text());
app.use(bodyparser.json())

app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors())
app.get("/",(req,resp)=>{
    resp.send("hyey")
    console.log(req.query)
})

const logins = require("./controllers/login")
app.post("/login",logins.login)




const storage = multer.diskStorage({

    destination: function (req, file,cb) {
      console.log("enter")

 return cb (null,"../client/public")
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}-${file.originalname}`);
    }
  
  })
  const upload = multer({storage,array:true})

app.post("/",upload.any(),(req,resp)=>{
    console.log("hi")
   
    const {name,price,category} = req.body
console.log(req.files,"body")
  const f = req.files;
  let file = [];
  for(let i = 0;i<f.length;i++){
    file.push(f[i].filename)
  }

    const files = JSON.stringify(file)
    
    console.log(files,name,price,category,"files")
    const quantity =    1
    con.query(`insert into data (pname,price,category,image,quantity) values ("${name}","${price}","${category}",'${files}',"${quantity}")`,(result,err)=>{
        console.log(result,"successful")
        if(err){
            console.log("errorrr",err)
        }
    })
    resp.send("successfully saved")
})
const foods=require("./controllers/food")
app.post("/food",foods.food)



app.post("/singleproduct",(req,resp)=>{
    const da= req.body.data
    const data = JSON.parse(da)
    console.log(req.body.data)
    con.query(`select * from data where id = "${data}"`,(err,result)=>{
     
        if(err){
            console.log(err)
        }
        console.log(result,"result")
       
        console.log("h")
        resp.send(result)
    })
})

app.post("/buyer",(req,resp)=>{
    console.log("enter to buyer");
   
    const d = req.body.data;
    const data = JSON.parse(d)
    const {name,phone,address,productid} = data;
    console.log(data)
    console.log(productid,name,phone,address,"this isii daeta from buyer")
    con.query(`insert into orderlist (productid,name,phone,address) values ("${productid}","${name}","${phone}","${address}")`,(err,reslt)=>{
        if(err){
            console.log(err)

        }
        else{
            console.log("data is inserted")
        }

    })
    resp.send(` ${name}`)
})

app.post("/orderget",(req,resp)=>{
    console.log("enter into orderget")
    con.query(`select * from data right join orderlist on data.id = orderlist.productid`,(err,result)=>{
        console.log(result)
        resp.send(result)
    })
})
app.post("/catego",(req,resp)=>{
    console.log(req.body,"req")
    con.query(`select * from data where category = "${req.body.data}"`,(err,result)=>{
 console.log("enter")
        if(err){
            console.log(err)
            resp.send("err")
        }
        else{
            console.log("send")
            resp.send(result)
        }
    })
})
const cartbuys = require("./controllers/cartbuy")
app.post("/cartbuy",cartbuys.cartbuy)

app.listen(4500)