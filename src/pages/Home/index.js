import React from "react"
import { Link } from 'react-router-dom'

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Button from "../../components/Button"

import land_image from "../../assets/imgs/land_image.png"

import { AppWrapper } from "./styles"
import "./Home.css"

function Home () {
return(
  <AppWrapper>
    <Header />
     <div id="page-landing">
        <div id="logo-container">
            <h2> Venha aprender dicas para preservação do meio ambiente</h2>
            <div id="button-container">
            < Button as= {Link} to="/dicas">
              Começar
            </Button>
            </div>

        </div>
        < img 
            src={land_image}
            alt="Ecologia"
            className="eco-image"
        
        />
     </div>
    <Footer />
  </AppWrapper>
)}

export default Home