import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  background: #707070;
  a {
    width: 90px;
    height: 50%;
    padding: 20px;
    border-radius: 50px;
    margin: auto 30px;
    color: #FFFFFF;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    visibility: ${({ backPage }) => !backPage && "hidden"};
    background: rgb(149,193,31);
    background: linear-gradient(90deg, rgba(149,193,31,1) 0%, rgba(0,152,58,1) 100%);
  }
`;

