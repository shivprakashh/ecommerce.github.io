const cons = require("./mysql");
const nodemailer = require("nodemailer")
const con = cons.con;





exports.cartbuy = (req,resp)=>{
    const data = JSON.parse(req.body.data)
    console.log(data.localdata,"localdata")
    const arr = data.localdata;
    let total = null;
    const idqua =[]
    arr.map((e)=>{
        console.log(e.price,e.quantity)
        total += e.price * e.quantity
        idqua.push({"price":e.price,"quantity":e.quantity})
        
    })
    console.log(total,"total")
    console.log(idqua,"idqua")
    resp.send(data.name)
    var transporter = nodemailer.createTransport({

        service: "gmail",
        auth: {
          user: "thetn1647@gmail.com",
          pass: "zbwdggxeyvircbbt"
        }
      });
      console.log('enter');
      let mailOptions = {
        from: 'thetn1647@gmail.com',
        to: "shivpraksh518@gmail.com",
        subject: "Verif",
        text: ` check new order`,
        html: `<h1>new order have done</h1>`
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log("sending");
          console.log(info)
          console.log(i)
        }
      })
    
}