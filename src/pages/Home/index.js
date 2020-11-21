import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderStyled from "../../components/Header";
import AnimationLottie from "../../components/AnimationLottie";
import courtAnimation from "../../assets/animations/court.json";
import {
  Container,
  TitleStyled,
  AnimationBoxStyled
} from "./styles";

function Home() {

  return (
    <>
      <HeaderStyled />
      <Container>
        <TitleStyled>
          ACOMPANHE AGORA MESMO OS SEUS <br /> PROCESSOS JUDICIAIS
        </TitleStyled>
        <AnimationBoxStyled>
          <AnimationLottie
            height={150}
            width={250}
            animationData={courtAnimation}
            borderRadius={100}
          />
        </AnimationBoxStyled>
        <Link to="/search-process">
          Começar
        </Link>
      </Container>
    </>
  );
}

export default Home;
