import { useEffect, useState,useRef } from "react";
import Footer from "./Footer"
import Nav from "./Nav"
import axios from "axios"
import "./cart.css"
import { FaTrash} from "react-icons/fa";
function Cart() {
    const a = "";
   const [bu,setbu] = useState(false)
    const [localdata, setlocaldata] = useState([])
    const [items, setitems] = useState(null)
    const [totalprice, settotalprice] = useState(0)
    const t = 0
    useEffect(() => {

        var existing = JSON.parse(localStorage.getItem("cartdata"));

        var total = 0;
        if (existing) {

            var mapfirst = existing.map(e => e[0] || e);
console.log(mapfirst,"this is data")
            setlocaldata(mapfirst)

            const price = mapfirst.map(e => parseInt(e.price))
            for (let i = 0; i < price.length; i++) {
                console.log(total += price[i], "price i")

            }


            console.log(price, "thisisi riice")
            setitems(existing.length)
            setlocaldata(mapfirst)

            settotalprice(total)



        }
    }, [])
    console.log(localdata,"localdata")
    function minus(index){
        const updatedLocalData = [...localdata];
        if (updatedLocalData[index].quantity > 1) {
          updatedLocalData[index].quantity--;
          const newtotal =  totalprice - parseInt(updatedLocalData[index].price) 
          settotalprice(newtotal)
        }
        setlocaldata(updatedLocalData);
    console.log(index,"inidex")
 


    }
    function plus(index){
        return () => {
          
            const updatedLocalData = [...localdata];
            updatedLocalData[index].quantity++;
            setlocaldata(updatedLocalData);
           
            const newtotal = parseInt(updatedLocalData[index].price) + totalprice
          settotalprice(newtotal)
            console.log(newtotal,"muu")
      
        }
    }

const productid =[{1:2 },{9:3}];
const [vonchar,setvonchar] = useState(false)

    const [name,setname] = useState("");
const [phone,setphone] = useState("");
const [address,setaddress] = useState("");
    function namechange(e){
        setname(e.target.value)
    }
    
    function phonechange(e){
        setphone(e.target.value)
    }
    function addresschange(e){
        setaddress(e.target.value)
    }
  
    function buysubmit(){
    console.log(localdata,"this is data")
    const pro = localdata.length;
   
    
  
        
  async function f() {
    await axios.post("https://formspree.io/f/xqkojdag", {
        data: JSON.stringify({pro,name,address,phone,email:"thetnaingtun837@gmail.com"}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(resp => {

            console.log(resp.data, "email data")
          
           

        }).catch(
            error => console.log(error)
        )
}
f()  



        async function fe() {
            await axios.post("http://localhost:4500/cartbuy", {
                data: JSON.stringify({localdata,name,address,phone}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(resp => {
    
                    console.log(resp.data, "axios this is a data")
                    setvonchar(true)
                    setbu(false)
                  
                   
    
                }).catch(
                    error => console.log(error)
                )
        }
        fe()
    }
      
function buynow(){
    setbu(true)
}
let i = [];
 localdata.map(e =>(i += `${e.id},`))
console.log(i,"everyfd")




function close(){
        setbu(false)
        setvonchar(false)
    }


function deletedata(e){
    console.log(localdata,"dtelte",e,"eee")
    const jsondata = JSON.parse( localStorage.getItem("cartdata"));
    console.log(jsondata,'dataa')
    let s = []
    const deleted = jsondata.map((a)=>{
        console.log(a,"s")
        if(a[0].id === e){
            console.log(a[0],"ifside")

        }
        else{
            s.push(a) ;
            console.log(a[0].id,e,"inside")
        }
       
    })
    console.log("id",e)
    console.log(s,"deleted")
    localStorage.setItem("cartdata",JSON.stringify(s))
    window.location.reload()
   
  
  
}


    return (
        <>
      
            <Nav />
            {vonchar && 
            <div className="modalcon">
            <div className="modal">
                <div className="close" onClick={close}></div>
                <div className="ordercon">
                  <h1>Thanks for shopping with us..</h1>
                  <p>We are delivering your products soon.</p>
                </div>
                <p className="text">Type your exact location with full address...</p>
            </div>
        </div>}

          {bu && <div className="modalcon">
                <div className="modal">
                    <div className="close" onClick={close}></div>
                    <div className="ordercon">
                        <input type="text" className="buyinput" onChange={namechange} placeholder="name"></input>
                        <input type="text"  className="buyinput" onChange={phonechange} placeholder="phone number"></input>
                       
                        <input type="text"  placeholder="address" onChange={addresschange} className="buyinput"></input>
                      
                       
                        <input className="buysubmit" onClick={buysubmit} type="submit"></input>
                    </div>
                    <p className="text">Type your exact location with full address...</p>
                </div>
            </div>}  
      <div className="to"></div>

            <div className="bigConCart">
                <div className="cartleft">
                    {localdata && localdata.map((e,index) => (
                        <>
                            <div className="conOfCart">
                                <img className="cartData" src={`/${e.image}`}></img>
                                <p className="dataname">{e.pname}</p>
                                <p  className="cartData">{e.price} <span>ks</span></p>
                                <div className="d">
                                    <p className="buttonincrease" onClick={()=>minus(index)}>-</p>
                                    <p>{e.quantity}</p>
                                    <p className="buttonincrease" onClick={plus(index)}>+</p>
                                </div>
                                <FaTrash key={e.id} className="deleteicon" onClick={()=>{deletedata(e.id)}} />

                            </div>

 

                        </>
                    ))}</div>

                <div className="cartright">
                    <p className="cartrighttext">Total items = {items}</p>
                    <p className="cartrighttext">Total amount= {totalprice}<span>ks</span></p>
                    <p className="cartrighttext">Discount = 10%</p>
                    <p className="totalprice">Total price = {totalprice}<span>ks</span></p>
                    <p   onClick={buynow} className="buynow">Buy Now</p>

                </div>

            </div>

            <Footer  />
        </>
    )
}
export default Cart;