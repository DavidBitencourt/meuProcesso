import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: ${({ visibilityModal }) => visibilityModal ? "fixed" : "inherit"};;
`;

export const ContainerSearchStyled = styled.div`
  width: 50%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 800px) {
    height: 240px;
    width: 100%;
    flex-direction: column;
    margin-top: 25px;
  }
`;

export const ButtonSearchStyled = styled.button`
  width: 20%;
  height: 50px;
  font-size: 14px;
  font-weight: bold;
  background: linear-gradient(90deg,rgba(149,193,31,1) 0%,rgba(0,152,58,1) 100%);
  color: #FFFFFF;
  border-radius: 25px;
  margin-top: 25px;
  border: none;
  opacity: ${({disabled}) => disabled ? 0.5 : 1};

  @media only screen and (max-width: 800px) {
    margin-top: 0;
  }

  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
`;

export const CountProcessTitleStyled = styled.h1`
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 25px 0;
    visibility: ${({loading, processesCount}) => loading === "true" || processesCount  < 1 ? "hidden" : "inherit"};
    @media only screen and (max-width: 800px) {
      font-size: 20px;
      margin: 50px 0 25px 0;
    }
`;

export const ContainerResultStyled = styled.div`
  width: 50%;
  height: auto;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const TableResultStyled = styled.table`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-collapse: collapse;
  margin-bottom: 100px;
`;

export const TableBodyStyled = styled.tbody`
  width: 100%;
  height: 100%;
`;

export const TableHeaderStyled = styled.th`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid #000;
`;

export const TableRowStyled = styled.tr`
  font-size: 14px;
  height: 40px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  :nth-of-type(n + 2) {
    :hover {
      transition: 0.3s;
      background: linear-gradient(90deg,rgba(149,193,31,1) 0%,rgba(0,152,58,1) 100%);
      color: #ffffff;
      cursor: pointer;
    }
  }
`;

export const TableColumnStyled = styled.td`
  text-align: center;
`;

export const EmptyBoxStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  transition: visibility 1s, opacity 0.5s linear;
`;

export const TextEmptyStyled = styled.label`
  font-size: 18px;
  color: #707070;
  margin-top: 20px
`;
