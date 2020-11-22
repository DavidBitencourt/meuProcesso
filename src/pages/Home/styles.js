import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  a {
    width: 220px;
    height: 55px;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    color: #FFFFFF;
    font-weight: bold;
    text-decoration: none;
    font-size: 18px;
    background: linear-gradient(90deg, rgba(149,193,31,1) 0%, rgba(0,152,58,1) 100%);
  }
`;

export const TitleStyled = styled.label`
  font-size: 26px;
  font-weight: bold;
  color: #95C11F;
  margin-top: 40px;
  text-align: center;
  line-height: 39px;
  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

export const AnimationBoxStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
