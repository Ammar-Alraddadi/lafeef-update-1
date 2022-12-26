import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import "../../assets/css/sidebar.css"
import Logo from "../../assets/imgs/svg/Logo";
// import Logo from "../../assets/imgs/logo2.png"
import { useState } from 'react';
import PopUp from '../PopUp';
import LoginWindow from '../PopUPWindow/LoginWindow';

function Navebar({language, changeLanguage, t}) {
  const test=(e)=>{
    e.preventDefault();
    console.log(e.target.value)
  }
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <Navbar id="Navbar">
      <Container>
        {/* <img src={Logo}/> */}
     
        <Logo id="logo"/>
        <Navbar.Brand className='lafeef' href="#home">{t("Lafeef")}</Navbar.Brand>
        <Navbar.Toggle/>
      
        <Navbar.Collapse className="justify-content-center">
          <Nav className="ms-auto">
            <Nav.Link className='nav-link' href="/">{t("Home")}</Nav.Link>
            <Nav.Link className='nav-link' href="">{t("Invest")}</Nav.Link>
            <Nav.Link className='nav-link' href="">{t("Raise")}</Nav.Link>
            <Nav.Link className='nav-link' href="">{t("Projects")}</Nav.Link>
            <Nav.Link className='nav-link' href="">{t("About")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link className='nav-link white' href="#Sign up">{t("Sign up")}</Nav.Link>
        <button className="login-btn nav-link white" href="#Log in" onClick={()=> setButtonPopup(true)} >{t("Login")}</button>
        
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
      <LoginWindow/>
      </PopUp>


          {language == "en"?
          <button className="lang" onClick={() => changeLanguage('ar')}>AR</button>
          :
          <button className="lang" onClick={() => changeLanguage('en')}>E</button>
        }
          
          
        </Navbar.Collapse>
      </Container>
</Navbar>

  )
}

export default Navebar