import React from "react";

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../features/Cards"
import { AppWrapper } from "./styles"

import "./Dicas.css"

function Dicas() {
  return (
   <AppWrapper>
      <Header />
        <div id="page-landing">
          <Card frontSide="teste" backSide="vire" title="titulo"/>
        </div>
      <Footer />
   </AppWrapper>
  );
}

export default Dicas;
