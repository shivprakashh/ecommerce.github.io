import "./product.css"
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom"
function Product() {
    const [data, setdata] = useState([])
    const [catego, setcatego] = useState("")
    const [cart, setcart] = useState("")
    const [price, setprice] = useState("")


  



    useEffect(() => {
        async function fetch() {
            await axios.post("http://localhost:4500/food")
                .then(resp => {
                    setdata(resp.data)
                    console.log(resp.data, "axios")
                    console.log(data[0].price, "dat")
                    console.log(data,"thsi si")


                }).catch(
                    error => console.log(error)
                )
        }

        fetch()
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", function () {

            if (this.window.scrollY > 220) {
                setcatego("categodisplay")
            }
            else {
                setcatego("")
            }
        })
    }, [])

    function addcart() {
        console.log("h")
        if (price === "pricehover") {
            setprice("")
            console.log("rem", price)
        }
        else {
            setprice("pricehover")
            console.log("set", price)
        }
        if (cart === "carthover") {
            setcart("")

        }
        else {
            setcart("carthover")

        }
    }

    function categoclick(d) {
        console.log(d)
        const data = { data: d }
        async function fetch() {
            await axios.post("http://localhost:4500/catego", data)
                .then(resp => {

                    console.log(resp.data, "axios")
                    setdata(resp.data)


                }).catch(
                    error => console.log(error)
                )
        }

        fetch()

    }
    const [inner, setinner] = useState(null)
    return (<>

        <div className="productcon">




            <div className="productsmall">
                <div className="title_productcon">
                    <p>Honey Boba products</p><p>Top Rate</p>
                </div>
                {data && data.map((item) => {
                    const imagear = JSON.parse(item.image)
                     return(
                    <div onMouseEnter={addcart} className="product_data">
                        <div className="productimg">
                            <Link to={{ pathname: `/orderpage/${item.id}` }} >
                              
                                <img className="proimg" src={`./${imagear[0]}`}/></Link>
                        </div>
                        <div className="price_con" >
                            <p className="pname" >{item.pname}</p><p className="pprice">{item.price}ks</p>
                        </div>
                        <p className="cartbut" >Add to cart</p>

                    </div>)})
                }
            </div>


            <div className="catego" id={catego}>
                <p onClick={(e) => { categoclick("bubble") }} className="categodata">Bubble</p>
                <p onClick={(e) => { categoclick("green tea") }} className="categodata"> Green tea</p>
                <p onClick={(e) => { categoclick("Cake") }} className="categodata">Cake</p>
                <p onClick={(e) => { categoclick("juice") }} className="categodata">Juice</p>
                <p onClick={(e) => { categoclick("food") }} className="categodata">Food</p>
            </div>
        </div>


    </>)
}
export default Product;