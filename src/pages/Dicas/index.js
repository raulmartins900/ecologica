import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../features/Cards"
import { AppWrapper } from "./styles"
import { EffectCards } from "swiper/modules";

import "./Dicas.css"
import 'swiper/css';
import 'swiper/css/effect-cards';


function Dicas() {
  return (
   <AppWrapper>
      <Header />
        <div id="page-landing">
          <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          >
          <SwiperSlide><Card frontSide="teste" backSide="vire" title="titulo"/></SwiperSlide>
          <SwiperSlide><Card frontSide="teste2" backSide="vire2" title="titulo2"/></SwiperSlide>
          <SwiperSlide><Card frontSide="teste3" backSide="vire3" title="titulo3"/></SwiperSlide>
          </Swiper>
          
        </div>
      <Footer />
   </AppWrapper>
  );
}

export default Dicas;
