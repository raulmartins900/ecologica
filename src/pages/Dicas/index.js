import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../features/Cards"
import { AppWrapper } from "./styles"
import { EffectCards } from "swiper/modules";

import "./Dicas.css"
import 'swiper/css';
import 'swiper/css/effect-cards';

const perguntas = [ 
  {
    pergunta: "O que é reciclagem e por que é importante?",
    resposta: "Reciclagem é o processo de transformar materiais usados em novos produtos. É importante porque reduz a quantidade de lixo nos aterros, economiza recursos naturais e diminui a poluição."
  },
  {
    pergunta: "Como posso economizar água diariamente?",
    resposta: "Feche a torneira enquanto escova os dentes, conserte vazamentos, tome banhos mais curtos e utilize um balde para lavar o carro em vez de mangueira."
  },
  {
    pergunta: "Qual é o impacto do uso excessivo de plástico no meio ambiente?",
    resposta: "O plástico leva centenas de anos para se decompor, polui oceanos, prejudica a vida marinha e libera toxinas no ambiente, contribuindo para a degradação ambiental."
  },
  {
    pergunta: "O que posso fazer para reduzir a poluição do ar?",
    resposta: "Use transporte público, ande de bicicleta, opte por veículos elétricos ou híbridos, evite queimar lixo e plante árvores para ajudar na absorção de dióxido de carbono."
  },
  {
    pergunta: "Quais são as vantagens de usar energia renovável?",
    resposta: "Energia renovável, como solar e eólica, é limpa, inesgotável e reduz as emissões de gases de efeito estufa, ajudando a combater as mudanças climáticas."
  }

]

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
          <SwiperSlide><Card frontSide={perguntas[0].pergunta} backSide={perguntas[0].resposta} title="Pergunta 1"/></SwiperSlide>
          <SwiperSlide><Card frontSide={perguntas[1].pergunta} backSide={perguntas[1].resposta} title="Pergunta 2"/></SwiperSlide>
          <SwiperSlide><Card frontSide={perguntas[2].pergunta} backSide={perguntas[2].resposta} title="Pergunta 3"/></SwiperSlide>
          <SwiperSlide><Card frontSide={perguntas[3].pergunta} backSide={perguntas[3].resposta} title="Pergunta 4"/></SwiperSlide>
          <SwiperSlide><Card frontSide={perguntas[4].pergunta} backSide={perguntas[4].resposta} title="Pergunta 5"/></SwiperSlide>
          </Swiper>
          
        </div>
      <Footer />
   </AppWrapper>
  );
}

export default Dicas;
