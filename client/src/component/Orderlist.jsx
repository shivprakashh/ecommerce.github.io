import { useEffect, useState } from "react";
import "./orderlist.css"
import axios from "axios"
function Orderlist() {

    const [data, setdata] = useState([]);

    console.log(data,'this is')
    const [loading, setloading] = useState(true);
    useEffect(() => {
        async function fetch() {
            await axios.post("http://localhost:4500/orderget")
                .then(resp => {
                    setdata(resp.data)
                    console.log(resp.data, "axios")
                    console.log(data)
                    setloading(false)

                }).catch(
                    error => console.log(error)
                )
        }

        fetch()
    }, []);
const [color,setcolor] = useState("rgb(249, 147, 147)")
 function check(e){
    console.log(e.target.id,"check")
 
  let v = e.target.id;
  let id = `${v}card`
const element = document.getElementById(id);
console.log(element.style.backgroundColor,",...")
if(element.style.backgroundColor === "#fefefe"){
    element.style.backgroundColor= "white";
    console.log("white")
}
else{
    element.style.backgroundColor = "#dddddd"
    console.log("red")
}



 }

    return (
        <>

            <div className="orderlistcon">

                <div className="title">
                    <p className="tit">NO</p>
                    <p className="tit">Product image</p>
                    <p className="tit">Product name</p>
                    <p className="tit">Buyer name</p>
                    <p className="tit">Buyer phone no</p>
                    <p className="tit">Buyer address</p>
                    <p className="tit">Done</p>
                </div>

                {data.map((e) => (<> <div id={`${e.id}card`} style={{backgroundColor:"#f4f4f4"}} className="ordercard">
                    <div className="no">{e.buyerid}</div>
                
                    <div className="ordercard_con"><img src={`./${e.image}`} className="orderimg"></img></div>
                    <div className="ordercard_con">{e.pname}</div>  <div className="ordercard_con">{e.name}</div>

                    <div className="ordercard_con">{e.phone}</div><div className="ordercard_con">{e.address}</div>
                    <input id={e.id} onClick={(e)=>{check(e)}} className="check" type="checkbox"></input>
                </div></>))}





            </div>



        </>
    )
}
export default Orderlist;