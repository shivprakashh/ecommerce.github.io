import "./delete.css"
import axios from "axios"
import "./adminproduct.css"
import { useEffect, useState } from "react";
function Delete(props){
    const [singleproduct,setsingleproduct] = useState([])
    const id = props.id
    useEffect(() => {
        async function fetch() {
            await axios.post("http://localhost:4500/singleproduct", {
                data: JSON.stringify(id),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(resp => {

                    console.log(resp.data, "axios this is a data")
                    setsingleproduct(resp.data)
                  

                }).catch(
                    error => console.log(error)
                )
        }

        fetch()
    }, []);
return(
    <>
    <div className="deletecon">
        <div className="deleteLeft">
        {singleproduct && singleproduct.map((e) => (
                     <div className="datacon">

                        <div className="pcon" >
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
        </div>
        
        <div className="deleteRight">
            <h1 className="edittext">Edit The Product here</h1>
        <input type="file" ></input>
            <input type="text" placeholder="change name" className="in"></input>
            <input type="text" placeholder="change price" className="in"></input>
           
            <input type="text" placeholder="chage discount" className="in"></input>
            <button className="bu">Delete Product</button>
            <input  className="bu" type="submit"></input>
        </div>
    </div>
    </>
)
}
export default Delete;