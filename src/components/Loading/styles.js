import styled, { css } from "styled-components";

export const LoadingBoxStyled = styled.div`
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  transition: visibility 1s, opacity 0.5s linear;
  opacity: 1;
  ${({ show }) =>
    !show &&
    css`
      visibility: hidden;
      opacity: 0;
      transition: visibility 1s, opacity 1s linear;
    `}
`;

export const TextStyled = styled.label`
  font-size: 16px;
  color: #707070;
`;
