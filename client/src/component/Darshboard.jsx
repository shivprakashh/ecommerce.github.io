import react from "react"
import { useState } from "react"
import "./admin.css"
import { FaFolderOpen} from "react-icons/fa";
import Addcon from "./Addcon"
import Orderlist from "./Orderlist"
import "./orderlist.css"
import Adminproduct from "./Adminproduct"
function Darshboard() {
    const [data, setdata] = useState("")

    function list() {
        setdata("Orderlist")
    }

    const pages = {
        "Orderlist": <Orderlist />,
        "addcon":<Addcon/>
        ,
        "adminproduct":<Adminproduct/>
    }
function add(){
    setdata("addcon")
}
function product(){
    setdata("adminproduct")
}
console.log("hi",`${pages[data]}`)

    return (
        <>
            <div className="allcon">
                <div className="left">
                    <div className="adminbutcon">
                      <div className="butcon">
                           <img className="adminbut"  onClick={list} src="/order.png"></img>
                          <p>order</p>
                           </div>
                           <div className="butcon">
                      <img src="/add.png" className="adminbut" onClick={add} ></img>
                   <p>add </p>
                      </div>
                      <div className="butcon">
                        <div className="adminbut" onClick={product}>
                         <FaFolderOpen className="folder"/>
                         <p>Products</p>
                        </div>
                        </div>
                        <div className="butcon">
                        <div className="adminbut">
                         
                        </div>
                        </div>
                        <div className="butcon">
                        <div className="adminbut">
                         
                        </div>
                        </div>
                        <div className="butcon">
                        <div className="adminbut">
                         
                        </div>
                        </div>

                        
                        </div>



                </div>
                <div className="rightcon">
                {pages[data]}</div>
            </div>
        </>
    )
}
export default Darshboard