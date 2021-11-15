import "../../../assets/css/navbar.css";
import react, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/Logo-BnW.png";
import menu from "../../../assets/images/icons8-menu.png";
import cross from "../../../assets/images/icons8-delete.png";
const Navbar = (props) => {
  
    let [mobile, setmobile] = useState(false);
    let [Menu, setmenu] = useState(0);
    const menuicons = [menu, cross];
    let pages = [{ name: "Home", link: "/", classname: "link " },
        { name: "Services", link: "/Services", classname: "link " },
        { name: "About", link: "/About", classname: "link " },
        { name: "Contact", link: "/Contact", classname: "link " },
    ]
    const linkClickHandler = (e) => {
       
        setmenu(0);
    }
    const menuBtnHandler = () => {
        Menu == 0 ? setmenu(1) : setmenu(0);
    }
    useEffect(() => {
        resizeHandler();
    },[])
    const resizeHandler = () => {
        if (window.innerWidth < 960) {
            setmobile(true);
        }
        else {
            setmobile(false);
        }
    }
    window.addEventListener("resize", resizeHandler);
    return (
        <div className="navbar">
            <div className="navcontainer">
                <div className="logo">
                <NavLink  className="link" to="/"> <img onClick={linkClickHandler} id="0" className="logo" src={logo} alt="logo" /></NavLink>
                
                </div>
                           { !mobile&& <div className="links">
                    {pages.map((element, index) => {
                        return (<NavLink activeClassName="active" id={index} key={index} exact to={element.link} onClick={linkClickHandler} className={element.classname}>{ element.name}</NavLink>)
                    })}
                </div>}
                {mobile && <div className="links">
                    <img onClick={menuBtnHandler} alt="menuicon" className="menuicon" src={menuicons[Menu]}></img>
                </div>}
            </div>
            {mobile===true&&Menu===1&&<div className="mobilemenu">
            {pages.map((element, index) => {
                        return (<NavLink activeClassName="active"  id={index} key={index} exact to={element.link} onClick={linkClickHandler} className={element.classname}>{ element.name}</NavLink>)
                    })}
            </div>}
        </div>
    );
}

export default Navbar;