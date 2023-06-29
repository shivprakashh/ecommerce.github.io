import react, { useContext, useState, useEffect } from "react"
import axios from "axios"
import { useLocation, useParams } from "react-router-dom"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Nav from "./Nav"
import Footer from "./Footer"
import "./orderpage.css"

function Orderpage(props) {


    const { id } = useParams();
    const location = useLocation();

    const [buy, setbuy] = useState(false)
    const [loading, setloading] = useState(true)
    const [singleproduct, setsingleproduct] = useState([])
    const [singleloading, setsingleloading] = useState(true)


    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [address, setaddress] = useState("");
    const [resp, setresp] = useState("")
    const productid = id;




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
                    setsingleloading(false)
                    setloading(false)


                }).catch(
                    error => console.log(error)
                )
        }

        fetch()
    }, []);

    function ordermodal() {
        setbuy(true)

    }
    function close() {
        setbuy(false)
        setresp(false)
    }


    function namechange(e) {
        setname(e.target.value)
    }

    function phonechange(e) {
        setphone(e.target.value)
    }
    function addresschange(e) {
        setaddress(e.target.value)
    }
    function buysubmit() {
        console.log(name, phone, address, productid, "this is data")




        async function fetch() {
            await axios.post("http://localhost:4500/buyer", {
                data: JSON.stringify({ name: name, phone: phone, address: address, productid: productid }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(resp => {

                    console.log(resp.data, "axios this is a data")
                    setresp(resp.data)


                }).catch(
                    error => console.log(error)
                )
        }

        fetch()
        setbuy(false)



    }
    const [no, setno] = useState({})


    function addcart() {
        const jsondata = JSON.parse(localStorage.getItem("cartdata"))

        if (jsondata) {

            console.log("newitems enter")

            var existing = JSON.parse(localStorage.getItem("cartdata"));
            var newitems = JSON.stringify(singleproduct);

            existing.push(singleproduct)
            localStorage.setItem("cartdata", JSON.stringify(existing))

        }
        else {
            console.log("this is addcart resp")
            localStorage.setItem("cartdata", JSON.stringify(singleproduct))
            console.log("firest")
        }


        var cookie = document.cookie;
        window.location.reload();
    }

    return (
        <>
            <Nav no={no} />
            {resp && <div className="modalcon">
                <div className="modal">
                    <div className="close" onClick={close}></div>

                    <p className="text">hello {resp},<p className="name">thanks you for shopping with us...</p></p>
                </div>
            </div>}



            {buy && <div className="modalcon">
                <div className="modal">
                    <div className="close" onClick={close}></div>
                    <div className="ordercon">
                        <input type="text" className="buyinput" onChange={namechange} placeholder="name"></input>
                        <input type="text" className="buyinput" onChange={phonechange} placeholder="phone number"></input>

                        <input type="text" placeholder="address" onChange={addresschange} className="buyinput"></input>


                        <input className="buysubmit" onClick={buysubmit} type="submit"></input>
                    </div>
                    <p className="text">Type your exact location with full address...</p>
                </div>
            </div>}
            <div className="big">



                {loading &&
                    <div className="con">

                        <Skeleton count={1} width={1000} baseColor=" #efefef " height={600} />

                    </div>
                }
                {singleproduct.map(e => {
                    const imager = JSON.parse(e.image)
                    return (
                        <div className="con">
                            <div className="left_top">
                                <div className="imagebigcon">
                                    <div className="imageleftcon">
                                        {imager.map(dd => {

                                            return (<img className="leftimg" src={`/${dd}`} ></img>)
                                        })}



                                    </div>

                                    <div className="imagecon" >
                                        <img src={`/${imager[0]}`} className="orderpageimg"></img></div></div></div>




                            <div className="detailcon">
                                <div className="concard">

                                    <h2 className="pname">{e.pname} </h2>
                                    <p className="price">{e.price} <span>ks</span></p>
                                    <p className="rating"> give rating</p>
                                    <div className="buttomcon">
                                        <button className="button" onClick={ordermodal} >Buy</button>
                                        <button className="button" onClick={addcart}>Add to card</button>
                                    </div>
                                </div>

                                <div className="details"></div>
                            </div></div>

                    )
                })}

                <div className="suggestion">
                    <div className="orderpagecard"><img className="options" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzR9lYVsVhHtgUASLP6jNo1nJxWrPrEWBSBQ&usqp=CAU"></img></div>
                    <div className="orderpagecard"><img className="options" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzR9lYVsVhHtgUASLP6jNo1nJxWrPrEWBSBQ&usqp=CAU"></img></div>
                    <div className="orderpagecard"><img className="options" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzR9lYVsVhHtgUASLP6jNo1nJxWrPrEWBSBQ&usqp=CAU"></img></div>
                    <div className="orderpagecard"><img className="options" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzR9lYVsVhHtgUASLP6jNo1nJxWrPrEWBSBQ&usqp=CAU"></img></div>
                    <div className="orderpagecard"><img className="options" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzR9lYVsVhHtgUASLP6jNo1nJxWrPrEWBSBQ&usqp=CAU"></img></div>
                    <div className="orderpagecard"><img className="options" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzR9lYVsVhHtgUASLP6jNo1nJxWrPrEWBSBQ&usqp=CAU"></img></div>
                    <div className="orderpagecard"><img className="options" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzR9lYVsVhHtgUASLP6jNo1nJxWrPrEWBSBQ&usqp=CAU"></img></div>
                    <div className="orderpagecard"><img className="options" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzR9lYVsVhHtgUASLP6jNo1nJxWrPrEWBSBQ&usqp=CAU"></img></div>





                </div>


            </div>
            <Footer />
        </>
    )
}
export default Orderpage;