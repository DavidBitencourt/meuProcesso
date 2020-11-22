import { bounceInDown } from "react-animations";
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`${bounceInDown}`;

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: ${({ visibility }) => visibility ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const CardBoxStyled = styled.div`
  animation: 1s ${bounceAnimation};
  border-radius: 15px;
  width: 90%;
  max-width: 800px;
  height: 90%;
  z-index: 2;
  background: #ffffff;
  @media only screen and (max-width: 800px) {
    width: 95%;
    height: 80%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5%;
  margin: 20px;
`;

export const Title = styled.h2`
  width: 100%;
  color: black;
  font-size: 26px;
  text-align: center;
  color: #4f4f4f;
  @media only screen and (max-width: 800px) {
      font-size: 24px;
  }
`;

export const ButtonCloseStyled = styled.img`
  cursor: pointer;
  height: 3vw;
  width: 3vw;
`;

export const OverflowStyled = styled.div`
  width: 100%;
  height: 100%;
  background: #000000;
  position: absolute;
  opacity: 0.7;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 85%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 800px) {
    padding: 0px;
  }
`;

export const PublicationContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  overflow-y: ${({ loading }) => loading ? "inherit" : "scroll"};
`;

export const PublicationItemStyled = styled.div`
  width: 100%;
  margin-top: 25px;
`;

export const PublicationHeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PublicationHeaderTextStyled = styled.div`
  font-size: 16px;
  font-weight: bold;
  @media only screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const PublicationTextStyled = styled.div`
  font-size: 14px;
  margin-top: 20px;
  line-height: 23px;
`;

