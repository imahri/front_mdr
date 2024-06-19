"use client"
import Nav from "./components/Snabar"
import "../globals.css"
import style from "./components/navbar.module.css"

const Navbar = () =>{
  return <div>
    <Nav />
    <div className={style.blockit}></div>

  </div>;
}

export default Navbar;