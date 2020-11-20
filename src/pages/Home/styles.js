import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const TableResultStyled = styled.table`
  width: 45%;
  height: auto;
  border-radius: 10px;
  border-collapse: collapse;
`;

export const TableBodyStyled = styled.tbody`
  width: 100%;
  height: 100%;
`;

export const TableHeaderStyled = styled.th`
  text-align: center;
  border-bottom: 2px solid #000;
  font-weight: bold;
`;

export const TableRowStyled = styled.tr`
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  :nth-of-type(n + 2) {
    :hover {
      transition: 0.3s;
      background: linear-gradient(
        135deg,
        rgba(69, 40, 123, 1) 0%,
        rgba(12, 12, 12, 1) 100%
      );
      color: #ffffff;
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export const TableColumnStyled = styled.td`
  text-align: center;
`;

