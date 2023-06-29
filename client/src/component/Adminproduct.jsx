import "./adminproduct.css"
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom"
import Delete from "./Delete"
function Adminproduct() {
    const [data, setdata] = useState([])
    const [de,setde] = useState(null)
    useEffect(() => {
        async function fetch() {
            await axios.post("http://localhost:4500/food")
                .then(resp => {

                    console.log(resp.data, "axios")
                    setdata(resp.data)


                }).catch(
                    error => console.log(error)
                )
        }

        fetch()
    }, [])
  function deletep(e){
    console.log("enter",e)
    setde(<Delete id={e} />)
 
  }
    return (
        <>
            <div className="c">
                {de || 
                 <div className="procon">
                 {data && data.map((e) => (
                     <div className="datacon">

                        <div className="pcon" onClick={()=>deletep(e.id)} >
                             <div style={{ position: "relative" }}>
                                 <img className="img" src={`./${e.image}`} ></img>
                                 <div style={{ position: "absolute", bottom: 0, height: "100%", width: "100%", backgroundImage: "linear-gradient(rgba(0,0,0,0.01),#444)", display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "end" }}>
                                     <p className="pdesc">This is product description..</p>

                                 </div>
                                 <p className="discount">%20 OFF</p>
                             </div>

                             <div className="pricecon">
                                 <div style={{ display: "flex", justifyContent: "space-between","padding":"0px !important",margin:"0px !important" }}>
                                     <p className="pname">{e.pname}</p>
                                     <p className="pprice">${e.price}</p>
                                 </div>

                             </div>
                             

                         </div>
                     </div>
                 ))

                 }

             </div>}
               
            </div>
        </>
    )
}
export default Adminproduct;