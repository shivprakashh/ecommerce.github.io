import react, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Orderpage from "./Orderpage";
import "./home.css"

import Nav from "./Nav"
import Footer from "./Footer"
import { createContext } from "react";
import Middle from "./Middle.jsx"
import Product from "./Product.jsx"
function Home() {
    const [data, setdata] = useState([]);


    const [loading, setloading] = useState(true)


    console.log(data, "outside")
    const r = useRef("")

    function cardclick(e) {
        console.log("card have been clicked", e)



    }




    return (
        <div>

            <Nav />
            <Middle />
            <Product />
            <Footer />




        </div>
    )
}

export default Home
