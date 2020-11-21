import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ContainerSearchStyled = styled.div`
  width: 50%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CountProcessTitleStyled = styled.h1`
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 25px 0;
    visibility: ${({loading, processesCount}) => loading || processesCount  < 1 ? "hidden" : "inherit"};
`;

export const ContainerResultStyled = styled.div`
  width: 50%;
  height: auto;
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
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid #000;
`;

export const TableRowStyled = styled.tr`
  font-size: 16px;
  height: 45px;
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
