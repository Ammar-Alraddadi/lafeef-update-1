import React, {useState} from 'react'
import { slide as Menu } from 'react-burger-menu';
import "../../assets/css/sidebar.css"
import { Link } from "react-router-dom";

function Sidebar(props) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
    <Menu id="menue">


    <h1> {props.t("Lafeef")}</h1><hr className='Lafeef-Line'/>

    {/* <Link className="menu-item" onClick={showSidebar} to="#">
        {props.t("Sign up")}
    </Link>
    <Link className="menu-item" onClick={showSidebar} to="/Login">
        {props.t("Login")}
    </Link> */}
    {/* <hr className='line'/> */}
    <Link className="menu-item" onClick={showSidebar} to="/">
        {props.t("Home")}
    </Link>

    <Link className="menu-item" onClick={showSidebar} to="/invest">
        {props.t("Invest")}
    </Link>

    <Link className="menu-item" onClick={showSidebar} to="/raise">
        {props.t("Raise")}
    </Link>

    <Link className="menu-item" onClick={showSidebar} to="/projects">
        {props.t("Projects")}
    </Link>

    <Link className="menu-item" onClick={showSidebar} to="/about">
        {props.t("About")}
    </Link>

    </Menu>
    )
}

export default Sidebar