import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 80px;
  padding: 0 30px;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  background: #707070;
  @media only screen and (max-width: 800px) {
    padding: 0 15px;
  }
  a {
    width: 90px;
    height: 50%;
    margin: auto 0;
    padding: 20px;
    border-radius: 50px;
    color: #FFFFFF;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    visibility: ${({ backPage }) => !backPage && "hidden"};
    background: linear-gradient(90deg, rgba(149,193,31,1) 0%, rgba(0,152,58,1) 100%);
  }
`;

export const ContainerLogoStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextStyled = styled.h1`
  font-size: 32px;
  color: #95C11F;
  margin-left: 20px;
  @media only screen and (max-width: 800px) {
    font-size: 28px;
  }
`;

