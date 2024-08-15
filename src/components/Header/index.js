import React from "react"
import {Link} from 'react-router-dom'
import Logo from "../../assets/imgs/logo.png"
import {LogoImage, MenuWrapper} from './style.js'


function Menu(){
    return (
     <MenuWrapper className="Menu">
         <Link to="/">
           <div className="center"><LogoImage src={Logo} alt="Ecologica logo" /></div>
         </Link>
     </MenuWrapper>
    );
}

export default Menu;