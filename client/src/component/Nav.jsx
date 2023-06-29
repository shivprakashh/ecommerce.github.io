import { Link } from "react-router-dom"
import Cart from "./Cart"
import "./nav.css"
import { useEffect, useState } from "react";
import { FaBeer, FaBars ,FaSearch} from "react-icons/fa";

import { IconContext } from "react-icons"
function Nav(props) {
  const [menu, setmenu] = useState(false)
  const [no, setno] = useState("")
  useEffect(() => {
    const localno = JSON.parse(localStorage.getItem('cartdata'));
    console.log(localno, "localno")
    if (localno) {
      const a = localno;

      setno(a.length)
    }


  }, [])
  function menuclick() {
    console.log("hi")

    if (menu) {
      setmenu(false);
      document.body.classList.remove("overflow")

    }
    else {
      setmenu(true);
      document.body.classList.add("overflow")

    }
  }
  return (
    <>
      <div className="nav">

        <Link className="logo" to={{ pathname: "/" }}> <p >H<spa>O</spa>NEY B<spa>O</spa>BA</p></Link>


       <div className="navsearchcon">
        <input type = "text" className="navsearch"></input>
        <FaSearch className="searchicon"/>

        </div>

        <Link to={{ pathname: "/cart" }}>
          <div className="cartcon"><div className="cartno">{no || ""}</div>
            <img className="cartimg" src="/cart.jpg"></img></div></Link>

        <FaBars onClick={menuclick} className="r" />


      </div>
      {menu &&
        <div className="menucon">
          <Link to={{ pathname: "/" }}> <p className="menudata">HOME</p></Link>
          <Link to={{ pathname: "/contact" }}> <p className="menudata">CONTACT US</p></Link>
          <p className="menudata">ABOUT</p>
          <p className="menudata">HISTORY</p>

        </div>}

    </>
  )
}
export default Nav;